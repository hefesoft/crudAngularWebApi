using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace CrudApp.sampleData
{
    public class Estudiante
    {
        [Key]
        public int Codigo { get; set; }
        public String Nombre { get; set; }
    }
}