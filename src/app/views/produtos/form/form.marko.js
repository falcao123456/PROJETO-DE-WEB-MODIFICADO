// Compiled using marko@4.23.10 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/farmacia-dorgasil$1.0.0/src/app/views/produtos/form/form.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!doctype html><html lang=pt-br><head><meta charset=utf-8><meta name=viewport content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"><title>Farmacia Dorgasil - Cadastrar Produtos</title><link rel=stylesheet href=https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css integrity=sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2 crossorigin=anonymous></head><body><nav class=\"navbar navbar-expand-md navbar-dark bg-danger mb-4\"><a class=navbar-brand href=/ >Farmacia Dorgasil</a><button class=navbar-toggler type=button data-toggle=collapse data-target=#navbarCollapse aria-controls=navbarCollapse aria-expanded=false aria-label=\"Toggle navigation\"><span class=navbar-toggler-icon></span></button><section class=\"collapse navbar-collapse\" id=navbarCollapse><ul class=\"navbar-nav mr-auto\"><li class=nav-item><a class=nav-link href=/ >Home <span class=sr-only>(current)</span></a></li><li class=nav-item><a class=\"nav-link \" href=/funcionarios id=navbarDropdown role=button data-toggle=dropdown aria-haspopup=true aria-expanded=false>Funcionarios</a></li><li class=nav-item><a class=nav-link href=/produtos id=navbarDropdown role=button data-toggle=dropdown aria-haspopup=true aria-expanded=false>Produtos</a></li><li class=nav-item><a class=\"nav-link \" href=/funcionarios/form id=navbarDropdown role=button data-toggle=dropdown aria-haspopup=true aria-expanded=false>Cadastrar Funcionarios</a></li><li class=nav-item><a class=\"nav-link active\" href=/produtos/form id=navbarDropdown role=button data-toggle=dropdown aria-haspopup=true aria-expanded=false>Cadastrar Produtos</a></li><li class=nav-item><a class=nav-link href=#>Sobre</a></li></ul></section></nav><main role=main class=container><section class=\"card col-md-8\"><h1 class=\"card-title text-center\">Cadastrar Produto</h1><form action=/produtos method=post class=card-body>");

  if (data.produto.id) {
    out.w("<section><input type=hidden name=_method value=put></section>");
  }

  out.w("<input type=hidden id=id name=id" +
    marko_attr("value", data.produto.id) +
    "><section class=form-row><section class=\"form-group col-md-6 input\"><label for=nome>Nome</label><input type=text class=form-control id=nome name=nome" +
    marko_attr("value", data.produto.nome) +
    " placeholder=\"Nome do Medicamento\" required><span class=error></span></section><section class=\"form-group col-md-6 input\"><label for=laboratorio>Laboratorio</label><input type=text class=form-control id=laboratorio" +
    marko_attr("value", data.produto.laboratorio) +
    " name=laboratorio placeholder=\"Laboratorio do Medicamento\" required><span class=error></span></section></section><section class=\"form-group input\"><label for=preco>Preço</label><input type=number class=form-control id=preco" +
    marko_attr("value", data.produto.preco) +
    " name=preco placeholder=9,99 required><span class=error></span></section><section class=\"form-group input\"><label for=decricao>Descrição</label><textarea type=text class=form-control id=descricao" +
    marko_attr("value", data.produto.descricao) +
    " name=descricao rows=3 placeholder=Descrição required></textarea><span class=error></span></section><section class=form-row><section class=\"form-group col-md-6 input\"><label for=quantidade>Quantidade</label><input type=number class=form-control id=quantidade name=quantidade" +
    marko_attr("value", data.produto.quantidade) +
    " placeholder=1000 required><span class=error></span></section><section class=\"form-group col-md-6 input\"><label for=numeroProduto>Codigo</label><input type=number class=form-control name=numeroProduto id=numeroProduto" +
    marko_attr("value", data.produto.numeroProduto) +
    " placeholder=123123 required><span class=error></span></section></section><button type=submit class=\"btn btn-block btn-primary\">Cadastrar</button></form></section></main><footer><script src=https://code.jquery.com/jquery-3.5.1.slim.min.js integrity=sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj crossorigin=anonymous></script><script src=https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js integrity=sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx crossorigin=anonymous></script></footer>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "61");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/farmacia-dorgasil$1.0.0/src/app/views/produtos/form/form.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
