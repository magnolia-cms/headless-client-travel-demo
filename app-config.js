
// Use the public Magnolia demo.

var HOST = "https://demopublic.magnolia-cms.com";
var REST_HOST = "https://demopublic.magnolia-cms.com"

var URL_CATEGORIES =        REST_HOST + "/.rest/delivery/tourTypes/v1/"
var URL_TOURS_BY_CATEGORY = REST_HOST + "/.rest/delivery/tours/v1/?tourTypes="
var URL_TOURS =             REST_HOST + "/.rest/delivery/tours/v1/"
var URL_TOURS_FEATURED =    REST_HOST + "/.rest/delivery/tours/v1/?isFeatured=true"
var URL_DEALS_1 =           "mock-data/deal1.html"
var URL_DEALS_2 =           "mock-data/deal2.html"

// Or use the below values to hit your local Magnolia instance.

/*
var HOST = "http://localhost:8080/magnoliaPublic";
var REST_HOST = "http://localhost:8080/magnoliaPublic";
var URL_CATEGORIES = HOST + "/category-endpoint"
var URL_TOURS_BY_CATEGORY = HOST + "/tour-endpoint?category="
var URL_TOURS = HOST + "/tour-endpoint?tour="
var URL_TOURS_FEATURED = HOST + "/tour-endpoint?featured=true"
var URL_DEALS_1 = "/.rest/html/v1//travel/marketing/main/0"
var URL_DEALS_2 = "/.rest/html/v1//travel/marketing/main/02"
*/
