// Compiled using marko@4.23.10 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/farmacia-dorgasil$1.0.0/src/app/views/produtos/lista/lista.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!doctype html><html lang=pt-br><head><meta charset=utf-8><meta name=viewport content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"><title>Farmacia Dorgasil - Listar Produtos</title><link rel=stylesheet href=./estatico/styles.css><link rel=stylesheet href=https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css integrity=sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2 crossorigin=anonymous></head><body><nav class=\"navbar navbar-expand-md navbar-dark bg-danger mb-4\"><a class=navbar-brand href=#>Farmacia Dorgasil</a><button class=navbar-toggler type=button data-toggle=collapse data-target=#navbarCollapse aria-controls=navbarCollapse aria-expanded=false aria-label=\"Toggle navigation\"><span class=navbar-toggler-icon></span></button><section class=\"collapse navbar-collapse\" id=navbarCollapse><ul class=\"navbar-nav mr-auto\"><li class=nav-item><a class=nav-link href=#>Home <span class=sr-only>(current)</span></a></li><li class=nav-item><a class=\"nav-link \" href=/funcionarios id=navbarDropdown role=button data-toggle=dropdown aria-haspopup=true aria-expanded=false>Funcionarios</a></li><li class=nav-item><a class=\"nav-link active\" href=/produtos id=navbarDropdown role=button data-toggle=dropdown aria-haspopup=true aria-expanded=false>Produtos</a></li><li class=nav-item><a class=\"nav-link \" href=/funcionarios/form id=navbarDropdown role=button data-toggle=dropdown aria-haspopup=true aria-expanded=false>Cadastrar Funcionarios</a></li><li class=nav-item><a class=nav-link href=/produtos/form id=navbarDropdown role=button data-toggle=dropdown aria-haspopup=true aria-expanded=false>Cadastrar Produtos</a></li><li class=nav-item><a class=nav-link href=#>Sobre</a></li></ul></section></nav><main role=main class=container><h1 class=text-center>Lista de Produtos</h1><section class=col-md-8><table id=produtos class=\"table table-bordered\"><tr><th>ID</th><th>Nome</th><th>Laboratorio</th><th>Preco</th><th>Codigo</th><th>Quantidade</th><th>Descrição</th><th>Editar</th><th>Remover</th></tr>");

  var $for$0 = 0;

  marko_forOf(data.produtos, function(item) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<tr" +
      marko_attr("id", "produto_" + (item.id == null ? "" : item.id)) +
      "><td>" +
      marko_escapeXml(item.id) +
      "</td><td>" +
      marko_escapeXml(item.nome) +
      "</td><td>" +
      marko_escapeXml(item.laboratorio) +
      "</td><td>" +
      marko_escapeXml(item.preco) +
      "</td><td>" +
      marko_escapeXml(item.numeroProduto) +
      "</td><td>" +
      marko_escapeXml(item.quantidade) +
      "</td><td>" +
      marko_escapeXml(item.descricao) +
      "</td><td><a" +
      marko_attr("href", "/produtos/form/" + (item.id == null ? "" : item.id)) +
      " data-type=editar>Editar</a></td><td><a href=#" +
      marko_attr("data-ref", item.id) +
      " data-type=remocao>Remover</a></td><td></td></tr>");
  });

  out.w("</table></section></main><footer><script src=https://code.jquery.com/jquery-3.5.1.slim.min.js integrity=sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj crossorigin=anonymous></script><script src=https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js integrity=sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx crossorigin=anonymous></script></footer>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "55");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/farmacia-dorgasil$1.0.0/src/app/views/produtos/lista/lista.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
