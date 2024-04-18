
document.addEventListener('DOMContentLoaded', () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: false });
  
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = 'fixed';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.zIndex = '0';
    document.body.appendChild(renderer.domElement);
  
    // Función para crear toroides con diferentes posiciones y colores
    function createTorusKnot(x, y, z, color) {
      const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
      const material = new THREE.MeshBasicMaterial({ color: color, wireframe: true });
      const torusKnot = new THREE.Mesh(geometry, material);
      torusKnot.position.set(x, y, z);
      scene.add(torusKnot);
      return torusKnot;
    }
  
    // Crear múltiples toroides
    const torusKnots = [
      createTorusKnot(-50, 0, 0, 0xff0000), // Rojo
      createTorusKnot(50, 0, 0, 0x00ff00),  // Verde
      createTorusKnot(2, 0, 0, 0x0000ff),  // Azul
      // Agrega más si lo necesitas
    ];
  
    camera.position.z = 50;
  
    function animate() {
      requestAnimationFrame(animate);
      
      // Rotar cada toroide
      torusKnots.forEach(torusKnot => {
        torusKnot.rotation.x += 0.01;
        torusKnot.rotation.y += 0.01;
      });
  
      renderer.render(scene, camera);
    }
  
    animate();
  });
  