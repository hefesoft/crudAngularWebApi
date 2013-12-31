(function () {
    'use strict';

    var serviceId = 'datacontext';
    angular.module('app').factory(serviceId,
        ['common', '$resource', '$http', datacontext]);

    function datacontext(common, $resource, $http ) {
        var $q = common.$q;

        var service = {
            obtenerEstudiantes: obtenerEstudiantes,
            insertarEstudiante: insertarEstudiante,
            actualizarEstudiante: actualizarEstudiante,
            eliminarEstudiante: eliminarEstudiante
        };

        return service;
        
        //Ruta de web api
        function obtenerEstudiantes() {
            return $resource('api/values').query();
        }

        function insertarEstudiante(value) {
            return $resource('api/values').save(value);
        }

        function actualizarEstudiante(value) {
            return $http.put('api/values/', value);
        }

        function eliminarEstudiante(value) {
            return $resource('api/values/' + value).delete();
        }
    }
})();