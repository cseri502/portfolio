<template>
    <div ref="container" class="stl-container" />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useDark } from '@vueuse/core';
import * as THREE from 'three';
import { OrbitControls } from 'three-stdlib';
import { STLLoader } from 'three-stdlib';

const props = defineProps<{ src: string }>();

const isDark = useDark({
    selector: 'html',
    attribute: 'data-theme',
    valueDark: 'dark',
    valueLight: 'light',
});

const container = ref<HTMLDivElement | null>(null);

let renderer: THREE.WebGLRenderer;
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let controls: OrbitControls;
let animationId: number;
let mesh: THREE.Mesh | null = null;

onMounted(() => {
    if (!container.value) return;
    initScene();
    loadModel(props.src);
    animate();
    window.addEventListener('resize', onResize);
    resizeObserver.observe(container.value);
});

onUnmounted(() => {
    cancelAnimationFrame(animationId);
    window.removeEventListener('resize', onResize);
    resizeObserver.disconnect();
    controls?.dispose();
    renderer?.dispose();
    mesh?.geometry.dispose();
    (mesh?.material as THREE.Material)?.dispose();
});

watch(
    () => props.src,
    (newSrc) => {
        loadModel(newSrc);
    }
);

watch(isDark, (newIsDark) => {
    updateTheme(newIsDark);
}, { immediate: true });

function initScene() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.set(80, 80, 80);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);

    if (container.value) {
        container.value.appendChild(renderer.domElement);
    }

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);

    scene.add(ambientLight);
    scene.add(directionalLight);

    updateTheme(isDark.value);
    onResize();
}

function updateTheme(darkMode: boolean) {
    if (!scene) return;

    if (darkMode) {
        scene.background = new THREE.Color('#0b1224');
        if (mesh) {
            (mesh.material as THREE.MeshStandardMaterial).color.setHex(0xffffff);
        }
    } else {
        scene.background = new THREE.Color('#f8fafc');
        if (mesh) {
            (mesh.material as THREE.MeshStandardMaterial).color.setHex(0x404040);
        }
    }
}

// STL loader
function loadModel(src: string) {
    const loader = new STLLoader();
    loader.load(
        src,
        (geometry: THREE.BufferGeometry) => {
            if (mesh) {
                scene.remove(mesh);
                mesh.geometry.dispose();
                (mesh.material as THREE.Material).dispose();
            }

            const modelColor = isDark.value ? 0xffffff : 0x909090;

            const material = new THREE.MeshStandardMaterial({
                color: modelColor,
                metalness: 0.1,
                roughness: 0.7,
            });

            mesh = new THREE.Mesh(geometry, material);
            mesh.geometry.center();
            scene.add(mesh);
        },
        undefined,
        (error: unknown) => {
            console.error('Failed to load STL:', error);
        }
    );
}

function animate() {
    animationId = requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

function onResize() {
    if (!container.value) return;

    const width = container.value.clientWidth;
    const height = container.value.clientHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
}

const resizeObserver = new ResizeObserver(onResize);
</script>

<style scoped>
.stl-container {
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
    overflow: hidden;
}
</style>
