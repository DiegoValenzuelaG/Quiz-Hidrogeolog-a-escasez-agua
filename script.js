document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            question: '¿Qué porcentaje de la superficie terrestre está cubierta de agua dulce y cuáles son algunas de las principales causas de su escasez a nivel mundial?',
            options: ['70% es agua dulce; contaminación y derroche doméstico.', '3% es agua dulce; contaminación, agricultura intensiva y sequías.', '10% es agua dulce; calentamiento global y crecimiento urbano.', '50% es agua dulce; desglaciación y malas prácticas de riego.'],
            answer: '3% es agua dulce; contaminación, agricultura intensiva y sequías.'
        },
        {
            question: 'Según el Código de Aguas de 1981 en Chile, ¿cómo se maneja la propiedad del agua y qué implicación tiene esto?',
            options: ['El agua es un bien público y su propiedad está ligada a la tierra.', 'El agua está en manos del Estado y se prioriza el consumo humano.', 'El recurso imprescindible para la vida se encuentra en manos privadas y desvinculado de la tierra.', 'Se prioriza el uso agrícola y la propiedad es comunitaria.'],
            answer: 'El recurso imprescindible para la vida se encuentra en manos privadas y desvinculado de la tierra.'
        },
        {
            question: 'La provincia de Petorca es descrita como el "epicentro nacional de la violación del derecho humano al agua". ¿Cuál es la principal causa de esta situación en la región?',
            options: ['La minería a gran escala y la contaminación de las fuentes hídricas.', 'La falta de infraestructura de saneamiento básico en las comunidades.', 'El conflicto con el agronegocio, específicamente las plantaciones de paltos, que demandan enormes cantidades de agua.', 'Las recurrentes sequías que impiden la recarga natural de los acuíferos.'],
            answer: 'El conflicto con el agronegocio, específicamente las plantaciones de paltos, que demandan enormes cantidades de agua.'
        },
        {
            question: 'En marzo de 2019, el lecho del río La Ligua se secó por completo. ¿Cuál fue la razón principal de este evento, según el testimonio de René Vergara?',
            options: ['Un cambio climático repentino que desvió el curso del río.', 'La construcción de una represa aguas arriba que interrumpió el flujo.', 'Las grandes plantaciones de paltos que comenzaron hace ocho a diez años, las cuales robaron agua de las napas subterráneas, provocando el decaimiento del agua superficial.', 'La sobrepoblación en la ribera del río que agotó el recurso.'],
            answer: 'Las grandes plantaciones de paltos que comenzaron hace ocho a diez años, las cuales robaron agua de las napas subterráneas, provocando el decaimiento del agua superficial.'
        },
        {
            question: '¿Cómo ha evolucionado la cantidad de agua subterránea (GWE) autorizada en Chile Central entre 1970 y 2020?',
            options: ['Se mantuvo relativamente estable, con ligeros aumentos en décadas recientes.', 'Disminuyó debido a la implementación de políticas de conservación.', 'Aumentó un 1680%, pasando de 498 hm³ en 1970 a 8883 hm³ en 2020.', 'No hay registros suficientes para determinar una tendencia clara.'],
            answer: 'Aumentó un 1680%, pasando de 498 hm³ en 1970 a 8883 hm³ en 2020.'
        },
        {
            question: 'Según el estudio de Taucare et al. (2024), ¿cuál es el principal uso del agua subterránea autorizada en Chile Central en 2020?',
            options: ['Consumo de agua potable, principalmente para grandes ciudades.', 'Uso industrial, incluyendo energía y manufactura.', 'Actividades agrícolas, representando el 63.1% del total.', 'Minería, especialmente para la extracción de cobre.'],
            answer: 'Actividades agrícolas, representando el 63.1% del total.'
        },
        {
            question: 'Taucare et al. (2024) investigaron la relación entre el descenso de los niveles de agua subterránea, la Megasequía (desde 2010) y la extracción de agua. ¿Cuál fue su conclusión principal sobre el factor dominante en la disminución de los acuíferos?',
            options: ['La Megasequía es el factor principal, con un impacto devastador.', 'El declive de los niveles de agua subterránea se correlaciona fuertemente con el bombeo (extracciones), no con los cambios de precipitación, aunque la Megasequía exacerbó las tendencias preexistentes.', 'Ambos factores tienen un impacto equitativo y simultáneo.', 'La falta de recarga natural debido al deshielo glaciar es la causa principal.'],
            answer: 'El declive de los niveles de agua subterránea se correlaciona fuertemente con el bombeo (extracciones), no con los cambios de precipitación, aunque la Megasequía exacerbó las tendencias preexistentes.'
        },
        {
            question: 'El estudio de Taucare et al. (2024) identificó dos tendencias generales en la evolución de los niveles de agua subterránea en Chile Central entre 1970 y 2020. ¿Cuáles son estas tendencias?',
            options: ['Un aumento constante hasta 2000, seguido de un declive.', 'Un declive sostenido pre-1988 y un régimen casi estacionario post-1988.', 'Un régimen hidrodinámico casi estacionario pre-1988 y un declive sostenido post-1988, exacerbado desde 2010 con el inicio de la Megasequía.', 'Una recuperación gradual desde 1970 hasta la actualidad.'],
            answer: 'Un régimen hidrodinámico casi estacionario pre-1988 y un declive sostenido post-1988, exacerbado desde 2010 con el inicio de la Megasequía.'
        },
        {
            question: '¿Qué consecuencias sociales se han generado debido al descenso de los niveles de agua subterránea y la sobreexplotación en Chile Central?',
            options: ['Un aumento en la inversión pública para mejorar la infraestructura de agua.', 'Una mayor conciencia y colaboración entre los diferentes usuarios del agua.', 'Dificultades en el acceso al agua, especialmente para personas de bajos ingresos y pequeñas comunidades rurales, ya que se requieren pozos más profundos y costosos, dejando secos los pozos superficiales.', 'Una migración masiva de la población de zonas urbanas a rurales.'],
            answer: 'Dificultades en el acceso al agua, especialmente para personas de bajos ingresos y pequeñas comunidades rurales, ya que se requieren pozos más profundos y costosos, dejando secos los pozos superficiales.'
        },
        {
            question: 'El "modelo chileno" de gestión del agua, fundado en la ley de oferta y demanda, ha sido cuestionado. ¿Cuál es una de las críticas principales que se le hace en relación con los objetivos de desarrollo sostenible de las Naciones Unidas?',
            options: ['Fomenta la innovación tecnológica en la gestión hídrica.', 'Prioriza la oferta de agua sobre la regulación de la demanda, lo que obstaculiza el logro de los objetivos de desarrollo sostenible.', 'Promueve la equidad en el reparto de los derechos de agua.', 'Asegura la sostenibilidad a largo plazo de los recursos hídricos.'],
            answer: 'Prioriza la oferta de agua sobre la regulación de la demanda, lo que obstaculiza el logro de los objetivos de desarrollo sostenible.'
        },
        {
            question: '¿Qué propuesta a gran escala se menciona para enfrentar la crisis del agua en Chile, cuyo objetivo es trasladar el recurso de sur a norte?',
            options: ['La construcción de desalinizadoras a lo largo de toda la costa.', 'El proyecto "Reguemos Chile" y su "carretera hídrica", que busca trasvasar caudales invernales para la agricultura y el consumo de la población.', 'La importación de agua desde países vecinos.', 'La prohibición total del cultivo de paltos para liberar el recurso.'],
            answer: 'El proyecto "Reguemos Chile" y su "carretera hídrica", que busca trasvasar caudales invernales para la agricultura y el consumo de la población.'
        },
        {
            question: 'En contraste con la agricultura intensiva, ¿qué sistema de cultivo y riego sostenible implementa Iván Aguilera en su granja familiar para reducir significativamente el consumo de agua en sus paltos?',
            options: ['Riego por inundación y siembra de especies nativas.', 'Técnicas de cultivo hidropónico sin uso de suelo.', 'Lombricultura para fertilizar el suelo con materia orgánica, lo que aumenta la humedad, y un sistema de riego que utiliza solo 40 litros de agua por árbol al día, en lugar de 200 litros, además de energía fotovoltaica.', 'Recolección de agua de lluvia y uso exclusivo de fertilizantes químicos.'],
            answer: 'Lombricultura para fertilizar el suelo con materia orgánica, lo que aumenta la humedad, y un sistema de riego que utiliza solo 40 litros de agua por árbol al día, en lugar de 200 litros, además de energía fotovoltaica.'
        },
        {
            question: 'En la región de Coquimbo, específicamente en Cerrillos de Tamaya, se implementó un proyecto de reciclaje de agua. ¿Qué tipo de agua se recicla y para qué uso se destina?',
            options: ['Agua de mar, desalinización para consumo humano.', 'Aguas grises (de lavabos, bañeras, lavadoras) para riego de alfalfa y otros usos, pero no es apta para consumo humano.', 'Aguas residuales tratadas para ser vertidas directamente al río.', 'Agua de lluvia recolectada para la generación de energía.'],
            answer: 'Aguas grises (de lavabos, bañeras, lavadoras) para riego de alfalfa y otros usos, pero no es apta para consumo humano.'
        },
        {
            question: 'La fundación "Un Alto en el Desierto" utiliza una técnica ancestral en la región de Coquimbo. ¿Cuál es esta técnica y qué otro componente esencial integra la fundación en su trabajo?',
            options: ['Perforación de pozos profundos; la investigación científica.', 'Atrapanieblas, mallas que captan el agua de la niebla que sube del mar; la educación ambiental con las comunidades y escuelas.', 'Desalinización de agua de mar; el desarrollo turístico.', 'Reforestación masiva; la promoción de cultivos exóticos.'],
            answer: 'Atrapanieblas, mallas que captan el agua de la niebla que sube del mar; la educación ambiental con las comunidades y escuelas.'
        },
        {
            question: '¿Por qué la fundación "Un Alto en el Desierto" destaca la importancia del trabajo directo con las comunidades y el uso de mano de obra local en la implementación de sus proyectos hídricos?',
            options: ['Para reducir los costos de inversión en mano de obra especializada.', 'Para generar empleo temporal en las zonas rurales.', 'Para asegurar la rapidez en la ejecución de los proyectos.', 'Porque esto genera una mayor apropiación de los sistemas por parte de las comunidades, lo que resulta más efectivo que los proyectos de grandes empresas sin vínculos locales y costosos.'],
            answer: 'Porque esto genera una mayor apropiación de los sistemas por parte de las comunidades, lo que resulta más efectivo que los proyectos de grandes empresas sin vínculos locales y costosos.'
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;
    let selectedOption = null;

    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const submitBtn = document.getElementById('submit-btn');
    const feedbackText = document.getElementById('feedback-text');
    const quizContainer = document.querySelector('.quiz-container');
    const scoreContainer = document.getElementById('score-container');
    const finalScore = document.getElementById('final-score');
    const totalQuestions = document.getElementById('total-questions');
    const finalMessage = document.getElementById('final-message');
    const restartBtn = document.getElementById('restart-btn');

    function loadQuestion() {
        // Habilitar el botón Siguiente
        submitBtn.disabled = true;

        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
        optionsContainer.innerHTML = '';
        feedbackText.textContent = '';
        selectedOption = null;

        currentQuestion.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option-btn');
            button.addEventListener('click', () => selectOption(button, option));
            optionsContainer.appendChild(button);
        });
    }

    function selectOption(button, option) {
        // Deseleccionar cualquier opción previamente seleccionada
        document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
        // Seleccionar la opción actual
        button.classList.add('selected');
        selectedOption = option;
        // Habilitar el botón Siguiente
        submitBtn.disabled = false;
    }

    function checkAnswer() {
        if (!selectedOption) {
            return;
        }

        const currentQuestion = questions[currentQuestionIndex];
        const buttons = document.querySelectorAll('.option-btn');

        buttons.forEach(button => {
            if (button.textContent === currentQuestion.answer) {
                button.classList.add('correct');
            } else if (button.textContent === selectedOption) {
                button.classList.add('incorrect');
            }
            button.disabled = true; // Deshabilita los botones una vez que se ha respondido
        });

        if (selectedOption === currentQuestion.answer) {
            score++;
            feedbackText.textContent = '¡Correcto! ✅';
        } else {
            feedbackText.textContent = 'Incorrecto. La respuesta correcta es: ' + currentQuestion.answer;
        }
    }

    submitBtn.addEventListener('click', () => {
        if (submitBtn.textContent === 'Siguiente') {
            checkAnswer();
            submitBtn.textContent = 'Continuar';
        } else {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                loadQuestion();
                submitBtn.textContent = 'Siguiente';
            } else {
                showFinalScore();
            }
        }
    });

    function showFinalScore() {
        quizContainer.classList.add('hidden');
        scoreContainer.classList.remove('hidden');
        finalScore.textContent = score;
        totalQuestions.textContent = questions.length;
        if (score === questions.length) {
            finalMessage.textContent = '¡Felicidades! ¡Has respondido todas las preguntas correctamente! 🏆';
        } else if (score >= questions.length / 2) {
            finalMessage.textContent = '¡Buen trabajo! Has logrado un buen puntaje. 💪';
        } else {
            finalMessage.textContent = 'Puedes hacerlo mejor. ¡Inténtalo de nuevo! 😉';
        }
    }

    restartBtn.addEventListener('click', () => {
        currentQuestionIndex = 0;
        score = 0;
        selectedOption = null;
        quizContainer.classList.remove('hidden');
        scoreContainer.classList.add('hidden');
        submitBtn.textContent = 'Siguiente';
        loadQuestion();
    });

    loadQuestion();
});