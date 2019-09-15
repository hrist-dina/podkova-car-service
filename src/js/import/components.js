import $ from "jquery";
import {Filter} from "%components%/filter/Filter";
import {ServicesList} from "%components%/services-list/ServicesList";
import {Record} from "%components%/record/Record";
import {Map} from "%components%/record/Map";

$(document).ready(function () {
    new Filter();
    new ServicesList();
    new Record();
    new Map();
});