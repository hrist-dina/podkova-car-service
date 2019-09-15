import $ from "jquery";

export class Record {
    constructor(selector = '.js-record') {
        this.tab = $(`${selector}-tab`);
        this.tabContent = $(`${selector}-tab-content`);

        this.init();
    }

    init() {
        this.onClick();
    }

    onClick() {
        let self = this;
        this.tab.on('click', function () {
            self.tab.removeClass('active');
            let tab = $(this);
            tab.addClass('active');
            let tabData = tab.data('tab');

            self.tabContent.each((key, item) => {
                if ($(item).data('tab-content') === tabData) {
                    $(item).addClass('active');
                } else {
                    $(item).removeClass('active');
                }
            });
        });
    }
}