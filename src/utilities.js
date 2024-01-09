// Diccionario de traducción de clases de inglés a español
const clasesTraducidas = {
  'person': 'persona',
    'bicycle': 'bicicleta',
    'car': 'coche',
    'motorcycle': 'motocicleta',
    'airplane': 'avion',
    'bus': 'autobus',
    'train': 'tren',
    'truck': 'camion',
    'boat': 'barco',
    'traffic light': 'semáforo',
    'fire hydrant': 'boca de incendios',
    'stop sign': 'señal de stop',
    'parking meter': 'parquimetro',
    'bench': 'banco',
    'bird': 'pajaro',
    'cat': 'gato',
    'dog': 'perro',
    'horse': 'caballo',
    'sheep': 'oveja',
    'cow': 'vaca',
    'elephant': 'elefante',
    'bear': 'oso',
    'zebra': 'cebra',
    'giraffe': 'jirafa',
    'backpack': 'mochila',
    'umbrella': 'paraguas',
    'handbag': 'bolso',
    'tie': 'corbata',
    'suitcase': 'maleta',
    'frisbee': 'disco volador',
    'skis': 'esquis',
    'snowboard': 'snowboard',
    'sports ball': 'pelota de deporte',
    'kite': 'cometa',
    'baseball bat': 'bate de beisbol',
    'baseball glove': 'guante de beisbol',
    'skateboard': 'patineta',
    'surfboard': 'tabla de surf',
    'tennis racket': 'raqueta de tenis',
    'bottle': 'botella',
    'wine glass': 'copa de vino',
    'cup': 'taza',
    'fork': 'tenedor',
    'knife': 'cuchillo',
    'spoon': 'cuchara',
    'bowl': 'cuenco',
    'banana': 'platano',
    'apple': 'manzana',
    'sandwich': 'sandwich',
    'orange': 'naranja',
    'broccoli': 'brocoli',
    'carrot': 'zanahoria',
    'hot dog': 'perro caliente',
    'pizza': 'pizza',
    'donut': 'dona',
    'cake': 'pastel',
    'chair': 'silla',
    'couch': 'sofa',
    'potted plant': 'planta en maceta',
    'bed': 'cama',
    'dining table': 'mesa de comedor',
    'toilet': 'inodoro',
    'tv': 'television',
    'laptop': 'computadora portatil',
    'mouse': 'raton',
    'remote': 'control remoto',
    'keyboard': 'teclado',
    'cell phone': 'telefono celular',
    'microwave': 'microondas',
    'oven': 'horno',
    'toaster': 'tostadora',
    'sink': 'fregadero',
    'refrigerator': 'nevera',
    'book': 'libro',
    'clock': 'reloj',
    'vase': 'jarron',
    'scissors': 'tijeras',
    'teddy bear': 'oso de peluche',
    'hair drier': 'secador de pelo',
    'toothbrush': 'cepillo de dientes'
  // Agrega más traducciones según sea necesario para las clases que COCO-SSD puede detectar
};

export const drawRect = (detections, ctx) => {
  // Loop a través de cada predicción
  detections.forEach(prediction => {
    // Extraer cajas y clases
    const [x, y, width, height] = prediction['bbox'];
    const claseEnIngles = prediction['class'];
    const claseEnEspanol = clasesTraducidas[claseEnIngles] || claseEnIngles;

    // Establecer estilo
    const color = 'green';
    ctx.strokeStyle = color;
    ctx.font = '18px Arial';

    // Dibujar rectángulos y texto
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillText(claseEnEspanol, x, y - 5); // Mostrar el nombre de la clase en español
    ctx.rect(x, y, width, height);
    ctx.stroke();
  });
};