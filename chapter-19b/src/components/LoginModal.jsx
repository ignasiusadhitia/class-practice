import React from "react";

function LoginModal({
  isLogin,
  onToggleLogin,
  handleChange,
  handleSubmit,
  error,
  loading,
  form,
}) {
  return (
    <div className="modal show d-block" tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">{isLogin ? "Login" : "Register"}</h5>
          </div>
          <div className="modal-body">
            {error && (
              <div className="alert alert-danger">
                <i className="bi bi-exclamation-triangle me-2"></i>
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={form.usernam}
                  className="form-control"
                  required
                  minLength={6}
                  maxLength={50}
                  onChange={handleChange}
                  disabled={loading}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={form.password}
                  className="form-control"
                  required
                  onChange={handleChange}
                  disabled={loading}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100 mt-2 fw-bold"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Processing...
                  </>
                ) : (
                  <>
                    <i className="bi bi-shield-lock"></i>
                    {isLogin ? "Login" : "Register"}
                  </>
                )}
              </button>
              <button
                className="btn btn-link w-100 mt-3 text-decoration-none"
                onClick={onToggleLogin}
                disabled={loading}
              >
                {isLogin ? "Register" : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
