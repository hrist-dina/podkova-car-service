import $ from "jquery";

export class ServicesList {
    constructor(select = '.js-services') {

        this.select = select;
        this.show = $(`${select}-show`);

        this.init();
    }

    init() {
        this.onClick();
        this.onChecked();
    }

    onClick() {
        this.show.on('click', function (event) {
            event.preventDefault();
            let parent =  $($(this).parents('li').first());
            parent.toggleClass('active');
            let child = parent.children().filter('ul');
            child.slideToggle();
        });
    }

    onChecked() {
        $(this.select).find('input[type=checkbox]').on('change', function () {

            let parent =  $($(this).parents('li').first());
            let child = parent.children().filter('ul');
            let checkboxes = child.find('input[type=checkbox]');
            if ($(this).prop('checked')) {
                checkboxes.prop('checked', true);
            } else {
                checkboxes.prop('checked', false);
            }
        });
    }
}