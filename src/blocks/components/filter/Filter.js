import $ from "jquery";

export class Filter {
    constructor(selector = '.js-filter') {
        this.filter = $(selector);

        this.select = $(`${selector}-select`);
        this.content = $(`${selector}-content`);

        this.init();
    }

    init() {
        this.onClick();
    }

    onClick() {
        let self = this;
        this.select.on('click', function () {
            self.select.removeClass('active');
            $(this).addClass('active');
            let filter = $(this).data('filter');

            let content = self.content.children();
            content.removeClass('active');
            content.map(function (key, item) {
                if ($(item).data('filter-content') === filter) {
                    $(item).addClass('active');
                }
            });

        });
    }
}