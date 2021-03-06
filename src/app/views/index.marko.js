// Compiled using marko@4.23.10 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/farmacia-dorgasil$1.0.0/src/app/views/index.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!doctype html><html lang=pt-br><head><meta charset=utf-8><meta name=viewport content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"><title>Farmacia Dorgasil</title><link rel=stylesheet href=https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css integrity=sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2 crossorigin=anonymous></head><body><nav class=\"navbar navbar-expand-md navbar-dark bg-danger mb-4\"><a class=navbar-brand href=/ >Farmacia Dorgasil</a><button class=navbar-toggler type=button data-toggle=collapse data-target=#navbarCollapse aria-controls=navbarCollapse aria-expanded=false aria-label=\"Toggle navigation\"><span class=navbar-toggler-icon></span></button><section class=\"collapse navbar-collapse\" id=navbarCollapse><ul class=\"navbar-nav mr-auto\"><li class=nav-item><a class=nav-link href=/ >Home <span class=sr-only>(current)</span></a></li><li class=nav-item><a class=\"nav-link \" href=/funcionarios id role=button data-toggle aria-haspopup=true aria-expanded=false>Funcionarios</a></li><li class=nav-item><a class=nav-link href=/produtos id role=button data-toggle aria-haspopup=true aria-expanded=false>Produtos</a></li><li class=nav-item><a class=\"nav-link \" href=/funcionarios/form id role=button data-toggle aria-haspopup=true aria-expanded=false>Cadastrar Funcionarios</a></li><li class=nav-item><a class=nav-link href=/produtos/form id role=button data-toggle aria-haspopup=true aria-expanded=false>Cadastrar Produtos</a></li></ul></section></nav><main role=main class=container><section class=jumbotron><h1>Bem Vindo!</h1><p class=lead>Essa é a nossa aplicação para cadastro de produtos e funcionários no sistema de nossa farmácia, simples porém eficiente, nos esforçamos muito para fazer, e eu particularmente detestei esse trabalho.</p><a class=\"btn btn-lg btn-primary\" href=# role=button>Sobre nós &raquo;</a></section></main><footer><script src=https://code.jquery.com/jquery-3.5.1.slim.min.js integrity=sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj crossorigin=anonymous></script><script src=https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js integrity=sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx crossorigin=anonymous></script></footer>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "30");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/farmacia-dorgasil$1.0.0/src/app/views/index.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
