export default function(req, res, next) {
    return res.status(404).json({
      success: false,
      message : "Route not found " + req.url + ' @ '+ req.method,
    })
  }