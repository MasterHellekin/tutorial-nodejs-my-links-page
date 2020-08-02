const pool = require("../database");

exports.getAddLinks = (req, res, next) => {
  res.render("links/add", {
    pageTitle: "Nuevo Link",
  });
};

exports.postAddLinks = async (req, res, next) => {
  const title = req.body.title;
  const url = req.body.url;
  const description = req.body.description;

  const link = {
    title,
    url,
    description,
    user_id: req.user.id,
  };

  await pool.query("INSERT INTO links set ?", [link]);
  req.flash("success", "Enlace guardado satisfactoriamente");
  res.redirect("/links");
};

exports.getLinks = async (req, res, next) => {
  const links = await pool.query("SELECT * FROM links WHERE user_id = ?", [
    req.user.id,
  ]);
  res.render("links/list", {
    pageTitle: "Lista de Links",
    links: links,
  });
};

exports.getDeleteLink = async (req, res, next) => {
  const linkId = req.params.id;
  await pool.query("DELETE FROM links WHERE id = ?", [linkId]);
  req.flash("success", "Enlace removido satisfactoriamente");
  res.redirect("/links");
};

exports.getEditLink = async (req, res, next) => {
  const linkId = req.params.id;
  const links = await pool.query("SELECT * FROM links WHERE id = ?", [linkId]);
  res.render("links/edit", {
    pageTitle: "Editar link",
    link: links[0],
  });
};

exports.postEditLink = async (req, res, next) => {
  const linkId = req.params.id;
  const title = req.body.title;
  const url = req.body.url;
  const description = req.body.description;

  const link = {
    title,
    url,
    description,
  };

  await pool.query("UPDATE links set ? WHERE id = ?", [link, linkId]);
  req.flash("success", "Enlace actualizado satisfactoriamente");
  res.redirect("/links");
};
