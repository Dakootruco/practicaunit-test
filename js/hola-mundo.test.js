const holaMundo = require('./hola-mundo'); // Asegúrate de que el nombre del archivo coincide

test('Debe retornar "Hola, Mundo"', () => {
    expect(holaMundo()).toBe("Hola, Mundo"); // 🔹 Verifica que `holaMundo` es una función
});
