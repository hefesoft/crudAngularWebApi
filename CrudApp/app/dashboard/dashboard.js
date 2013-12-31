(function () {
    'use strict';
    var controllerId = 'dashboard';
    angular.module('app').controller(controllerId, ['common', 'datacontext', '$modal', dashboard]);

    function dashboard(common, datacontext, $modal) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        
        activate();

        function activate() {
            var promises = [resultadoObtenerEstudiantes()];
            common.activateController(promises, controllerId)
                .then(function () { log('Vista activada'); });
        }

        function resultadoObtenerEstudiantes() {
            return vm.listadoEstudiantes = datacontext.obtenerEstudiantes();
        }

        vm.NuevoEstudiante = function (estudiante) {
            datacontext.insertarEstudiante(estudiante).$promise.then(
                    function (e) {
                        vm.listadoEstudiantes.push(estudiante);
                    },
                    function (e) { alert(e); }
            );
        };
        
        vm.actualizarEstudiante = function (estudiante) {
            datacontext.actualizarEstudiante(estudiante);
        };

        vm.eliminarEstudiante = function (element) {
            datacontext.eliminarEstudiante(element).$promise.then(
                    function (succes) {
                        vm.listadoEstudiantes = _(vm.listadoEstudiantes).reject(function (el) {
                            return el.Codigo === element;
                        });
                    },
                    function (error) {
                        alert(error);
                    }
            );
        };

        vm.VentanaNuevoEstudiante = function () {
            var modalInstance = $modal.open({
                controller: controlRegistro,
                templateUrl: 'Estudiante.html',
                resolve: {
                    estudiante: function () {
                        return;
                    }
                }
            });

            modalInstance.result.then(function () {
            }, function () {

            });
        };
        
        vm.VentanaEditarEstudiante = function (estudiante) {
            var modalInstance = $modal.open({
                controller: controlRegistro,
                templateUrl: 'Estudiante.html',
                resolve: {
                    estudiante: function () {
                        return estudiante;
                    }
                }
            });

            modalInstance.result.then(function () {
            }, function () {

            });
        };

        var controlRegistro = function ($scope, $modalInstance, estudiante) {

            if (estudiante === undefined) {
                $scope.estudiante = { Nombre: null };
                $scope.accion = "Guardar";
            } else {
                $scope.estudiante = estudiante;
                $scope.accion = "Editar";
            }

            $scope.ok = function () {
                if (estudiante === undefined) {
                    vm.NuevoEstudiante($scope.estudiante);
                } else {
                    vm.actualizarEstudiante($scope.estudiante);
                }
            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        };

    }
})();