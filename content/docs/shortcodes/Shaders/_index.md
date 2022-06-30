---
bookCollapseSection: true
---

{{< hint warning >}}
# Introducción
Los Shaders son programas que realizan cálculos gráficos y son escritos en lenguaje conocidos como "de sombreado" que se puede compilar de forma paralela. La gran mayoría de los Shaders están  codificados (y se ejecutan en) la unidad de procesamiento de gráfico (GPU).

Es una tecnología que ha experimentado una rápida evolución ya que está destinada a proporcionar al programador una interacción con la unidad de procesamiento gráfico (GPU) hasta ahora imposible. Los Shaders son utilizados para realizar transformaciones de vértices o coloreado de píxeles, entre otras labores, con el propósito de crear efectos especiales, como iluminación, fuego, niebla, etc.

{{< /hint >}}

{{< hint warning >}}
# Antecedentes

## Historia
En el 2000 la serie 2 de tarjetas GeForce permitía a la GPU hacerse cargo de funciones de transformación e iluminación que hasta ahora debía hacerlas la CPU, sin embargo no fue hasta la GeForce 3 (2001) que se incluyó la posibilidad de programarlas con la primera versión del modelo de sombreado. Sucesivas versiones de dicho modelo añadieron más funcionalidad: programación de operaciones sobre vértices, píxeles y texturas. Cada tipo de operación disponía de hardware específico en la GPU.

Las GPU modernas llevan Shaders unificados que permiten realizar distintas operaciones de sombreado con un mismo hardware, eliminando el particionado estático de la misma y maximizando su uso. La primera generación de programación unificada por parte de Nvidia fue el chip G80 usado en las tarjetas GeForce 8 y Nvidia Tesla. La primera generación de ATI (ahora AMD) se introdujo con el chip R600 usado en las tarjetas Radeon HD 2000, basados en la microarquitectura TeraScale. La Xbox 360 fue la primera videoconsola en emplear programación unificada en la GPU de la mano del chip Xenos basado en el diseño unificado de ATI.

## Lenguajes para Shaders
Para la escritura de Shaders, los programadores hacen uso de lenguajes de programación diseñados específicamente para ello. Existen varios lenguajes pero los siguientes son los más conocidos.

* GLSL: Es el lenguaje desarrollado por el grupo Khronos. Está diseñado para su uso dentro del entorno de OpenGL. Sus diseñadores afirman que se ha hecho un gran esfuerzo para lograr altos niveles de paralelismo. Su diseño se basa en C y RenderMan como modelo de lenguaje de sombreado.

* CG: Lenguaje propiedad de la empresa Nvidia resultante de su colaboración con Microsoft para el desarrollo de un lenguaje de sombreado. Su principal ventaja es que puede ser usado por las APIs OpenGL y DirectX. Este lenguaje no es totalmente independiente del hardware por lo tanto es recomendable crear programas específicos para diferentes tarjetas gráficas.

* HLSL: Es la implementación propiedad de Microsoft, la cual colaboró con Nvidia para crear un lenguaje de sombreado. Este lenguaje se debe utilizar junto a DirectX (la primera versión para la que se puede utilizar es Direct3D 8.0).

{{< /hint >}}

{{< hint warning >}}
# Planteamiento del problema
Debido a la rápida evolución de los Shaders y además por los beneficios que trae el procesamiento paralelo y la comunicación con la GPU, es interesante explorar la programación de Shaders con el objetivo de lograr un conocimiento inicial sobre el tema y además explorar sus diversas aplicaciones.
{{< /hint >}}

{{< hint info >}}
# Solución
para dar solución a la problematica presentada anteriormente fueron desarrollados diversos ejercicios de Shaders, con el fin de comprender su uso, el trabajo desarrollado puede ser encontrado en las páginas posteriores dentro de este desplegable.
{{< /hint >}}

{{< hint info >}}
# Conclusiones
* A partir del trabajo realizado fue posibe evidenciar que el procesamiento de gráficos utilizando Shaders es mucho más rápido comparado con implementaciones que realizan procesos similares utilizando la CPU.

* Aunque los procesos de renderizado y en general el uso de la GPU se suele asociar a videojuegos, con el desarrollo de este trabajo fue posible encontrar aplicaciones en campos como; la medicina, el desarrollo audiovisual, el diseño y la arquitectura.

* Considero que la curva inicial de aprendizaje para el trabajo con Shaders es alta, debido a que algunos conceptos son bastante abstractos y además el paradigma de programación cambia.
{{< /hint >}}

{{< hint danger >}}
# Trabajo futuro
* Implementar la aplicación de pixelado utilizando la función shape().
* Importar dentro de P5.js una figura 3D en formato .obj y aplicar en esta diversas máscaras.
* Desarrollar más programas que permitan un acercamiento a las aplicaciones de los Shaders en distintos campos.
{{< /hint >}}

{{< hint danger >}}
# Referencias
* LearnOpenGL - Shaders. (2020). Learn openGL. Recuperado 20 de junio de 2022, de https://learnopengl.com/Getting-started/Shaders

* Technologies, U. (2021). Unity - Manual: Sombreadores de Computación(Compute Shaders). Unity. Recuperado 19 de junio de 2022, de https://docs.unity3d.com/es/530/Manual/ComputeShaders.html

* J. (2016, 15 noviembre). Working with Shaders - Visual Studio 2015. Microsoft Docs. Recuperado 25 de junio de 2022, de https://docs.microsoft.com/es-es/previous-versions/visualstudio/visual-studio-2015/designers/working-with-shaders?view=vs-2015&redirectedfrom=MSDN

* Gonzalez P., Lowe J. The Book of Shaders. Recuperado 14 de junio de 2022, de https://thebookofshaders.com/
{{< /hint >}}