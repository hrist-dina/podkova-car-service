import $ from "jquery";

export class Map {
    constructor(id = "map-station-time") {
        this.map = id;

        this.init();
    }

    init() {
        this.initMap();
    }

    isMobile() {
        return $(window).width() <= 992;
    }

    getCenter() {
        return [53.331165571118596,83.663435];
    }

    initMap() {
        ymaps.ready().then(() => {
            let map = new ymaps.Map(this.map, {
                center: this.getCenter(),
                zoom: 16,
                controls: []
            });

            map.behaviors.disable('scrollZoom');

            let placemark = new ymaps.Placemark([53.331165571118596,83.663435], {
                hintContent: "",
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                // iconLayout: "default#image",
                // // Своё изображение иконки метки.
                // iconImageHref: $('#'+this.map).attr('data-img')?$('#'+this.map).attr('data-img'):"img/map/placemark.png",
                // // Размеры метки.
                // iconImageSize: [92, 103],
                // // Смещение левого верхнего угла иконки относительно
                // // её "ножки" (точки привязки).
                // iconImageOffset: [-45, -100]
            });
            map.geoObjects.add(placemark);
        });
    }
}