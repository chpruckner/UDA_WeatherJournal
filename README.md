# Udacity Nanodegree Frontend Development

## Project

A Weather Journal App

## Projects Requirements

This project required to create an asynchronous web app that uses Web API and user data to dynamically update the UI.

## Project Description

The user enters a zip code and (optional) a country code (e.g. us, at, it, etc.) as well as a short diary-like text and pushes the button "Generate". Depending on the zip and the country code an API call is made to [openweather.org](https://openweathermap.org/) and returns the name of the location, temperature and the description of the current weather condition. These dates as well as today's date and the short text, provided by the user is stored in an object on the server (localhost) via a POST route. Then the data is retrieved via a GET route to update the UI and show the user those dates.

## Miscellaneous

The pre-filled country code is "at" for Austria. It has to be two letters following the iso codes which can be found [here](https://countrycode.org/). 
The date format corresponds to the format mainly used in Europe "dd.mm.yyyy".