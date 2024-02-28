export class CenaTeste extends Phaser.Scene {

    constructor() {
        super({key: "CenaTeste"});
    }

    preload() {
        // Carregar o arquivo do mapa Tiled (substitua pelo caminho correto)
        this.load.tilemapTiledJSON('meta', 'assets/conjunto_de_blocos/meta.json');

        // Carregar as imagens usadas no mapa (tiles, sprites, etc.)
        this.load.image('tileset', 'assets/conjunto_de_blocos/japaneseCityFree.png');
    }

    create() {
        // Criar o mapa usando o arquivo Tiled carregado
        const map = this.make.tilemap({ key: 'meta' });

        // Adicionar um tileset ao mapa
        const tileset = map.addTilesetImage('NomeDoTilesetNoTiled', 'tileset'); // Substitua 'NomeDoTilesetNoTiled' pelo nome real do tileset

        // Criar uma layer usando o nome da camada no Tiled
        const chao = map.createLayer('chao', tileset); // Use map.createLayer em vez de this.map.createLayer e passe tileset diretamente

        // Opcional: Configurar câmera para seguir o jogador ou definir limites da câmera
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

        // Exemplo de configuração da GUI (dat.GUI)
        const gui = new dat.GUI();
        gui.addFolder('Camera');
        gui.add(this.cameras.main, 'dirty').listen();
        gui.add(this.cameras.main.midPoint, 'x').listen();
        gui.add(this.cameras.main.midPoint, 'y').listen();
        gui.add(this.cameras.main, 'scrollX').listen();
        gui.add(this.cameras.main, 'scrollY').listen();
    }
}
