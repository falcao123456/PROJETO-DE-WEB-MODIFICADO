// Compiled using marko@4.23.10 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/farmacia-dorgasil$1.0.0/src/app/views/funcionarios/form/form.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!doctype html><html lang=pt-br><head><meta charset=utf-8><meta name=viewport content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"><title>Farmacia Dorgasil - Cadastrar Funcionarios</title><link rel=stylesheet href=https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css integrity=sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2 crossorigin=anonymous></head><body><nav class=\"navbar navbar-expand-md navbar-dark bg-danger mb-4\"><a class=navbar-brand href=#>Farmacia Dorgasil</a><button class=navbar-toggler type=button data-toggle=collapse data-target=#navbarCollapse aria-controls=navbarCollapse aria-expanded=false aria-label=\"Toggle navigation\"><span class=navbar-toggler-icon></span></button><section class=\"collapse navbar-collapse\" id=navbarCollapse><ul class=\"navbar-nav mr-auto\"><li class=nav-item><a class=nav-link href=#>Home <span class=sr-only>(current)</span></a></li><li class=nav-item><a class=\"nav-link \" href=/funcionarios id=navbarDropdown role=button data-toggle=dropdown aria-haspopup=true aria-expanded=false>Funcionarios</a></li><li class=nav-item><a class=nav-link href=/produtos id=navbarDropdown role=button data-toggle=dropdown aria-haspopup=true aria-expanded=false>Produtos</a></li><li class=nav-item><a class=\"nav-link active\" href=/funcionarios/form id=navbarDropdown role=button data-toggle=dropdown aria-haspopup=true aria-expanded=false>Cadastrar Funcionarios</a></li><li class=nav-item><a class=nav-link href=/produtos/form id=navbarDropdown role=button data-toggle=dropdown aria-haspopup=true aria-expanded=false>Cadastrar Produtos</a></li><li class=nav-item><a class=nav-link href=#>Sobre</a></li></ul></section></nav><main role=main class=container><section class=\"card card col-md-8\"><h1 class=\"card-title text-center\">Cadastrar Funcionario</h1><form class=card-body action=/funcionarios method=post>");

  if (data.funcionario.id) {
    out.w("<section><input type=hidden name=_method value=put></section>");
  }

  out.w("<input type=hidden id=id name=id" +
    marko_attr("value", data.funcionario.id) +
    "><section class=form-row><section class=\"form-group col-md-6 input\"><label for=nome>Nome</label><input type=text class=form-control" +
    marko_attr("value", data.funcionario.nome) +
    " id=nome name=nome placeholder=Nome required><span class=error></span></section><section class=\"form-group col-md-6 input\"><label for=cpf>CPF</label><input type=number class=form-control id=cpf" +
    marko_attr("value", data.funcionario.cpf) +
    " name=cpf placeholder=Ex.:123.456.789-20 required><span class=error></span></section></section><section class=form-row><section class=\"form-group col-md-6 input\"><label for=cargo>Cargo</label><input type=text class=form-control id=cargo" +
    marko_attr("value", data.funcionario.cargo) +
    " name=cargo placeholder=Farmaceutico required><span class=error></span></section><section class=\"form-group col-md-6 input\"><label for=email>Email</label><input type=text class=form-control id=email" +
    marko_attr("value", data.funcionario.email) +
    " name=email placeholder=qualquerCoisa@meulEmail.com required><span class=error></span></section></section><section class=\"form-group input\"></section><section class=form-row><section class=\"form-group col-md-6 input\"><label for=telefone>Telefone</label><input type=number class=form-control id=telefone" +
    marko_attr("value", data.funcionario.telefone) +
    " name=telefone placeholder=(071)99999-9999 required><span class=error></span></section><section class=\"form-group col-md-6 input\"><label for=idade>Idade</label><input type=number class=form-control id=idade" +
    marko_attr("value", data.funcionario.idade) +
    " name=idade placeholder=22 required><span class=error></span></section><button type=submit class=\"btn btn-block btn-primary\">Cadastrar</button></section></form></section></main><footer><script src=https://code.jquery.com/jquery-3.5.1.slim.min.js integrity=sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj crossorigin=anonymous></script><script src=https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js integrity=sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx crossorigin=anonymous></script></footer>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "63");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/farmacia-dorgasil$1.0.0/src/app/views/funcionarios/form/form.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
