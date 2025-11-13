<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, HEAD");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
$publicaciones_dragon_ball = [
    // 1. Dragon Ball (Original)
    "publicacion_01" => [
        "titulo" => "El Comienzo: Goku niño y la Búsqueda de las Esferas",
        "saga" => "Dragon Ball",
        "personaje_principal" => "Goku (niño)",
        "tema_central" => "Aventuras, Torneos de Artes Marciales y el humor clásico.",
        "descripcion_corta" => "La introducción a Goku, Bulma, el Maestro Roshi y los primeros grandes villanos como Pilaf y el Rey Piccolo."
    ],

    // 2. Dragon Ball Z (Saga Saiyan)
    "publicacion_02" => [
        "titulo" => "La Revelación Saiyan: Raditz y el Sacrificio de Goku",
        "saga" => "Dragon Ball Z",
        "personaje_principal" => "Goku y Piccolo",
        "tema_central" => "El origen alienígena de Goku y la amenaza de invasores más fuertes (Raditz, Vegeta, Nappa).",
        "descripcion_corta" => "El inicio de DBZ, presentando a Gohan, la línea de tiempo de los Saiyans y el Kaioken."
    ],

    // 3. Dragon Ball Z (Saga Freezer)
    "publicacion_03" => [
        "titulo" => "¡El Super Saiyan! El Enfrentamiento en Namek",
        "saga" => "Dragon Ball Z",
        "personaje_principal" => "Vegeta y Goku",
        "tema_central" => "La tiranía de Freezer, la muerte de Krilin y la primera transformación Super Saiyan de Goku.",
        "descripcion_corta" => "El épico viaje a Namek para usar las esferas de ese planeta contra el Emperador del Mal."
    ],

    // 4. Dragon Ball Z (Saga Cell)
    "publicacion_04" => [
        "titulo" => "Los Androides y Cell: El Sacrificio de Gohan",
        "saga" => "Dragon Ball Z",
        "personaje_principal" => "Gohan (adolescente)",
        "tema_central" => "Viajes en el tiempo, la amenaza de los Androides y el despertar del Super Saiyan 2 por Gohan.",
        "descripcion_corta" => "Goku cede el relevo, Gohan muestra su potencial oculto y derrota a Cell en los Cell Games."
    ],

    // 5. Dragon Ball Z (Saga Buu)
    "publicacion_05" => [
        "titulo" => "Majin Buu: La Fusión, el Deseo y el Fin de Z",
        "saga" => "Dragon Ball Z",
        "personaje_principal" => "Goku y Vegeta",
        "tema_central" => "La aparición de nuevas transformaciones (SSJ3), la Fusión (Gotenks) y la Genkidama Final.",
        "descripcion_corta" => "El último gran villano de Z, con un poder de regeneración y múltiples formas."
    ],

    // 6. Dragon Ball GT (No Canónico)
    "publicacion_06" => [
        "titulo" => "La Búsqueda de las Esferas de Estrella Negra y Baby",
        "saga" => "Dragon Ball GT",
        "personaje_principal" => "Goku (niño) y Pan",
        "tema_central" => "Goku se vuelve niño, viajes por el espacio y la introducción de los Dragones Malignos.",
        "descripcion_corta" => "Un giro de vuelta a la aventura clásica, con la amenaza del parásito alienígena Baby."
    ],

    // 7. Dragon Ball GT (Super Saiyan 4)
    "publicacion_07" => [
        "titulo" => "SSJ4: La Transformación Definitiva de GT",
        "saga" => "Dragon Ball GT",
        "personaje_principal" => "Goku y Vegeta (SSJ4)",
        "tema_central" => "El Super Saiyan 4, la fusión Gogeta SSJ4 y la lucha final contra Omega Shenron.",
        "descripcion_corta" => "La forma exclusiva de GT que combina el poder de Oozaru con la forma Saiyan."
    ],

    // 8. Dragon Ball Super
    "publicacion_08" => [
        "titulo" => "La Era de los Dioses: Bills, Whis y el Super Saiyan God",
        "saga" => "Dragon Ball Super",
        "personaje_principal" => "Goku y Vegeta",
        "tema_central" => "Presentación de la jerarquía divina (Dioses de la Destrucción, Ángeles) y el Multiverso.",
        "descripcion_corta" => "Goku alcanza el SSJ God y luego el Blue, enfrentando al Dios de la Destrucción, Bills."
    ],

    // 9. Dragon Ball Super (Torneo de Poder)
    "publicacion_09" => [
        "titulo" => "El Torneo de Poder: El Ultra Instinto",
        "saga" => "Dragon Ball Super",
        "personaje_principal" => "Goku",
        "tema_central" => "Una batalla real entre universos por la supervivencia y el dominio del Ultra Instinto.",
        "descripcion_corta" => "Goku accede al Migatte no Gokui (Ultra Instinto) en la lucha contra Jiren del Universo 11."
    ],

    // Extra: Dragon Ball AF/Diama (Fan-Made/No Oficial)
    // El término "Diama" no es común. Asumo "AF" (After Future) por ser el fan-made más conocido.
    "publicacion_10_extra" => [
        "titulo" => "🔥 Fan Art: La Leyenda de Dragon Ball AF",
        "saga" => "Dragon Ball AF / Diama",
        "personaje_principal" => "Goku (SSJ5)",
        "tema_central" => "Niveles de poder más allá de GT/Super, nuevas transformaciones como el SSJ5, y personajes como Xicor.",
        "descripcion_corta" => "Una mirada a la saga 'fan-made' que capturó la imaginación de muchos en la década de 2000."
    ]
];

echo json_encode($publicaciones_dragon_ball);

?>