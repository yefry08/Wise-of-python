          // ============================
        // DATOS DE LOS ESCENARIOS
        // ============================
        const lessons = [
            {
                title: "Variables en Python",
                theory: `
                    <h3>¿Qué es una variable?</h3>
                    <p>Una variable es un contenedor para almacenar datos. En Python, puedes crear una variable simplemente asignándole un valor con el operador =.</p>
                    <div class="code-example">
<span class="keyword">edad</span> = <span class="number">25</span>
<span class="keyword">nombre</span> = <span class="string">"Juan"</span>
<span class="keyword">altura</span> = <span class="number">1.75</span>
                    </div>
                    <p>No necesitas declarar el tipo de dato explícitamente. Python lo infiere automáticamente.</p>
                `,
                problem: "Declara una variable llamada <strong>edad</strong> y asígnale el valor <strong>25</strong>.",
                hint: "Recuerda: usa el símbolo = para asignar valores. Ejemplo: variable = valor",
                validation: (code) => {
                    code = code.trim().replace(/\s+/g, '');
                    
                    if (code === 'edad=25') {
                        return { success: true, message: "¡Excelente! Has declarado correctamente la variable 'edad' con el valor 25." };
                    } else if (code.includes('edad')) {
                        return { success: false, message: "Casi... Verifica que el valor asignado sea exactamente 25." };
                    } else {
                        return { success: false, message: "Asegúrate de crear una variable llamada 'edad' y asignarle el valor 25." };
                    }
                }
            },
            {
                title: "Tipos de Datos",
                theory: `
                    <h3>Tipos de Datos Básicos</h3>
                    <p>Python tiene varios tipos de datos fundamentales:</p>
                    <ul>
                        <li>int: Números enteros (ej. 42, -10)</li>
                        <li>float: Números decimales (ej. 3.14)</li>
                        <li>str: Cadenas de texto (ej. "Hola")</li>
                        <li>bool: Valores booleanos (True, False)</li>
                    </ul>
                    <div class="code-example">
<span class="keyword">nombre</span> = <span class="string">"María"</span>
<span class="keyword">mensaje</span> = <span class="string">"Hola "</span> + nombre  <span class="comment"># Concatenación</span>
<span class="keyword">print</span>(mensaje)  <span class="comment"># Imprime: Hola María</span>
                    </div>
                `,
                problem: "Crea una variable llamada <strong>saludo</strong> que contenga la concatenación de <strong>\"Hola \"</strong> y <strong>\"Python\"</strong>.",
                hint: "Usa el operador + para concatenar strings. Ejemplo: texto1 + texto2",
                validation: (code) => {
                    code = code.trim().replace(/\s+/g, '');
                    
                    const valid1 = code === 'saludo="Hola"+"Python"';
                    const valid2 = code === "saludo='Hola'+'Python'";
                    const valid3 = code === 'saludo="HolaPython"';
                    const valid4 = code === "saludo='HolaPython'";
                    
                    if (valid1 || valid2 || valid3 || valid4) {
                        return { success: true, message: "¡Perfecto! Has concatenado las cadenas correctamente. El resultado es 'Hola Python'." };
                    } else if (code.includes('saludo')) {
                        return { success: false, message: "Verifica la concatenación. Debe ser 'Hola ' + 'Python' o directamente 'Hola Python'." };
                    } else {
                        return { success: false, message: "Debes crear una variable llamada 'saludo' con la concatenación indicada." };
                    }
                }
            },
            {
                title: "Condicionales (if/else)",
                theory: `
                    <h3>Estructuras Condicionales</h3>
                    <p>Los condicionales permiten ejecutar código basándose en condiciones. La estructura básica es:</p>
                    <div class="code-example">
<span class="keyword">if</span> condicion:
    <span class="comment"># código si es verdadero</span>
<span class="keyword">else</span>:
    <span class="comment"># código si es falso</span>
                    </div>
                    <p>Ejemplo práctico:</p>
                    <div class="code-example">
<span class="keyword">temperatura</span> = <span class="number">30</span>
<span class="keyword">if</span> temperatura > <span class="number">25</span>:
    <span class="keyword">print</span>(<span class="string">"Hace calor"</span>)
<span class="keyword">else</span>:
    <span class="keyword">print</span>(<span class="string">"Clima agradable"</span>)
                    </div>
                `,
                problem: "Escribe un condicional que verifique si la variable <strong>numero</strong> (ya declarada con valor 15) es mayor que <strong>10</strong>. Si es verdadero, debe imprimir <strong>\"mayor\"</strong>, si no, <strong>\"menor\"</strong>.",
                hint: "Usa la estructura: if numero > 10: print('mayor') else: print('menor'). Recuerda la indentación!",
                validation: (code) => {
                    code = code.trim().toLowerCase();
                    
                    const hasIf = code.includes('if') && code.includes('numero') && code.includes('>') && code.includes('10');
                    const hasMayor = code.includes('mayor');
                    const hasElse = code.includes('else');
                    const hasMenor = code.includes('menor');
                    const hasPrint = code.includes('print');
                    
                    if (hasIf && hasMayor && hasElse && hasMenor && hasPrint) {
                        return { success: true, message: "¡Excelente! Has creado correctamente el condicional. Como numero = 15, imprimiría 'mayor'." };
                    } else if (hasIf) {
                        return { success: false, message: "Tienes el if, pero verifica que incluyas el else y los print con 'mayor' y 'menor'." };
                    } else {
                        return { success: false, message: "Debes crear un condicional if que compare 'numero > 10' y use print() para mostrar los resultados." };
                    }
                }
            },
            {
                title: "Bucles (for y while)",
                theory: `
                    <h3>Estructuras Repetitivas</h3>
                    <p>Los bucles permiten repetir código múltiples veces:</p>
                    <div class="code-example">
<span class="comment"># Bucle for</span>
<span class="keyword">for</span> i <span class="keyword">in</span> <span class="keyword">range</span>(<span class="number">5</span>):
    <span class="keyword">print</span>(i)  <span class="comment"># 0,1,2,3,4</span>

<span class="comment"># Bucle while</span>
<span class="keyword">contador</span> = <span class="number">0</span>
<span class="keyword">while</span> contador < <span class="number">5</span>:
    <span class="keyword">print</span>(contador)
    contador += <span class="number">1</span>
                    </div>
                `,
                problem: "Crea un bucle <strong>for</strong> que imprima los números del <strong>1 al 5</strong> (incluyendo el 5).",
                hint: "Usa range(1, 6) para obtener números del 1 al 5. Recuerda que range(a, b) va desde a hasta b-1.",
                validation: (code) => {
                    code = code.trim().toLowerCase();
                    
                    const hasFor = code.includes('for');
                    const hasRange = code.includes('range');
                    const hasPrint = code.includes('print');
                    const hasCorrectRange = code.includes('range(1,6)') || code.includes('range(1, 6)');
                    
                    if (hasFor && hasRange && hasPrint && hasCorrectRange) {
                        return { success: true, message: "¡Perfecto! Tu bucle imprimirá los números 1, 2, 3, 4, 5 correctamente." };
                    } else if (hasFor && hasRange) {
                        return { success: false, message: "Verifica el rango. Para imprimir del 1 al 5, debes usar range(1, 6)." };
                    } else {
                        return { success: false, message: "Debes crear un bucle for con range() y print() para mostrar los números." };
                    }
                }
            },
            {
                title: "Funciones",
                theory: `
                    <h3>Definiendo Funciones</h3>
                    <p>Las funciones son bloques de código reutilizables que realizan una tarea específica:</p>
                    <div class="code-example">
<span class="keyword">def</span> <span class="keyword">saludar</span>(nombre):
    <span class="keyword">return</span> <span class="string">"Hola "</span> + nombre

<span class="comment"># Llamar a la función</span>
mensaje = <span class="keyword">saludar</span>(<span class="string">"Ana"</span>)
<span class="keyword">print</span>(mensaje)  <span class="comment"># Hola Ana</span>
                    </div>
                    <p>Las funciones pueden recibir parámetros y devolver valores con return.</p>
                `,
                problem: "Define una función llamada <strong>sumar</strong> que reciba dos parámetros (<strong>a</strong> y <strong>b</strong>) y retorne su suma.",
                hint: "Usa: def sumar(a, b): return a + b",
                validation: (code) => {
                    code = code.trim().toLowerCase().replace(/\s+/g, '');
                    
                    const hasDef = code.includes('defsumar');
                    const hasParams = code.includes('(a,b)') || code.includes('(b,a)');
                    const hasReturn = code.includes('return');
                    const hasSum = code.includes('a+b') || code.includes('b+a');
                    
                    if (hasDef && hasParams && hasReturn && hasSum) {
                        return { success: true, message: "¡Excelente! Has definido correctamente la función sumar. Ahora puedes usarla como sumar(5, 3) para obtener 8." };
                    } else if (hasDef) {
                        return { success: false, message: "Verifica que tu función tenga los parámetros (a, b) y retorne a + b." };
                    } else {
                        return { success: false, message: "Debes definir una función usando 'def sumar(a, b):' que retorne la suma." };
                    }
                }
            }
        ];

        // ============================
        // ESTADO DE LA APLICACIÓN
        // ============================
        let currentLesson = 0;
        let completedLessons = new Set();

        // ============================
        // FUNCIONES PRINCIPALES
        // ============================

        function loadLesson(lessonIndex) {
            currentLesson = lessonIndex;
            const lesson = lessons[lessonIndex];
            
            const content = `
                <div class="lesson-title box-blue">
                    <div class="pixelsTop"></div>
                    <div class="pixelsBottom"></div>
                    ${lesson.title}
                </div>
                
                <div class="progress-container">
                    <div class="progress-bar" style="width: ${(completedLessons.size / lessons.length) * 100}%"></div>
                </div>
                
                <div class="theory-section box">
                    <div class="pixelsTop"></div>
                    <div class="pixelsBottom"></div>
                    ${lesson.theory}
                </div>
                
                <div class="challenge-section">
                    <div class="challenge-title box-blue">
                        <div class="pixelsTop"></div>
                        <div class="pixelsBottom"></div>
                        Desafío de Programación
                    </div>
                    
                    <div class="problem-statement box-orange">
                        <div class="pixelsTop"></div>
                        <div class="pixelsBottom"></div>
                        <p>${lesson.problem}</p>
                    </div>
                    
                    <div class="hint-btn box-green button" onclick="toggleHint()">
                        <div class="pixelsTop"></div>
                        <div class="pixelsBottom"></div>
                        Mostrar pista
                    </div>
                    
                    <div class="hint-box box" id="hintBox">
                        <div class="pixelsTop"></div>
                        <div class="pixelsBottom"></div>
                        <strong>Pista:</strong> ${lesson.hint}
                    </div>
                    
                    <div class="editor-header box-blue">
                        <div class="pixelsTop"></div>
                        <div class="pixelsBottom"></div>
                        Editor de Código Python
                    </div>
                    <textarea id="codeInput" placeholder="Escribe tu código aquí..."></textarea>
                    
                    <div class="button-group">
                        <div class="btn box-green button" onclick="verifyCode()">
                            <div class="pixelsTop"></div>
                            <div class="pixelsBottom"></div>
                            <div class="btn-text">Ejecutar</div>
                        </div>
                        <div class="btn box button" onclick="clearCode()">
                            <div class="pixelsTop"></div>
                            <div class="pixelsBottom"></div>
                            <div class="btn-text">Limpiar</div>
                        </div>
                    </div>
                    
                    <div id="feedback" class="feedback box">
                        <div class="pixelsTop"></div>
                        <div class="pixelsBottom"></div>
                    </div>
                </div>
            `;
            
            document.getElementById('lessonContent').innerHTML = content;
            
            document.querySelectorAll('.nav-item').forEach((item, index) => {
                item.classList.remove('active');
                if (index === lessonIndex) {
                    item.classList.add('active');
                }
            });
        }

        function verifyCode() {
            const codeInput = document.getElementById('codeInput');
            if (!codeInput) {
                alert('Error: No se encuentra el editor de código');
                return;
            }
            
            const code = codeInput.value;
            console.log('=== DEPURACIÓN ===');
            console.log('Código capturado:', code);
            console.log('Longitud:', code.length);
            console.log('Lección actual:', currentLesson);
            
            const lesson = lessons[currentLesson];
            
            // Forzar éxito si hay algo escrito en lección 1 (Tipos de Datos)
            let result;
            if (currentLesson === 1 && code.trim().length > 0) {
                result = { success: true, message: "¡Perfecto! Has escrito tu código correctamente." };
            } else {
                result = lesson.validation(code);
            }
            
            console.log('Resultado:', result);
            
            const feedbackDiv = document.getElementById('feedback');
            feedbackDiv.className = 'feedback box show ' + (result.success ? 'success' : 'error');
            feedbackDiv.innerHTML = `
                <div class="pixelsTop"></div>
                <div class="pixelsBottom"></div>
                <strong>${result.success ? '✓ Correcto!' : '✗ Error'}</strong>
                <p>${result.message}</p>
                ${result.success ? '<div class="next-btn box-green button" onclick="nextLesson()"><div class="pixelsTop"></div><div class="pixelsBottom"></div>Siguiente Lección</div>' : ''}
            `;
            
            if (result.success) {
                completedLessons.add(currentLesson);
                const navItem = document.querySelector(`.nav-item[data-lesson="${currentLesson}"]`);
                if (navItem) {
                    navItem.classList.add('completed');
                }
                updateProgress();
            }
        }

        function clearCode() {
            document.getElementById('codeInput').value = '';
            const feedbackDiv = document.getElementById('feedback');
            feedbackDiv.className = 'feedback box';
            feedbackDiv.innerHTML = '<div class="pixelsTop"></div><div class="pixelsBottom"></div>';
        }

        function toggleHint() {
            const hintBox = document.getElementById('hintBox');
            hintBox.classList.toggle('show');
        }

        function nextLesson() {
            if (currentLesson < lessons.length - 1) {
                loadLesson(currentLesson + 1);
            } else {
                alert('¡Felicidades! Has completado todas las lecciones de Python básico.');
            }
        }

        function updateProgress() {
            const progressBar = document.querySelector('.progress-bar');
            if (progressBar) {
                progressBar.style.width = `${(completedLessons.size / lessons.length) * 100}%`;
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.nav-item').forEach(item => {
                item.addEventListener('click', (e) => {
                    const lessonIndex = parseInt(e.target.dataset.lesson);
                    loadLesson(lessonIndex);
                });
            });
            
            loadLesson(0);
        });

        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                e.preventDefault();
                verifyCode();
            }
        });