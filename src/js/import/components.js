import $ from "jquery";
import {Filter} from "%components%/filter/Filter";
import {ServicesList} from "%components%/services-list/ServicesList";

$(document).ready(function () {
    new Filter();
    new ServicesList();
});