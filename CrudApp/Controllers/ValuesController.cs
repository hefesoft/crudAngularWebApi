using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;
using CrudApp.sampleData;

namespace CrudApp.Controllers
{
    public class ValuesController : ApiController
    {
        // GET api/values
        public List<sampleData.Estudiante> Get()
        {
            List<sampleData.Estudiante> lst = new List<Estudiante>();

            lst.Add(new Estudiante() { Codigo = 1, Nombre = "Jose" });
            lst.Add(new Estudiante() { Codigo = 2, Nombre = "Douglas" });

            return lst;
        }

        // POST api/values
        [System.Web.Mvc.HttpPost]
        public HttpStatusCodeResult Post(sampleData.Estudiante est)
        {
            return new HttpStatusCodeResult(HttpStatusCode.OK);
        }

        [System.Web.Mvc.HttpPut]
        // PUT api/values/5
        public HttpStatusCodeResult Put(sampleData.Estudiante est)
        {
            return new HttpStatusCodeResult(HttpStatusCode.OK);
        }

        [System.Web.Mvc.HttpDelete]
        // DELETE api/values/5
        public HttpStatusCodeResult Delete(int id)
        {
            return new HttpStatusCodeResult(HttpStatusCode.OK);
        }
    }
}