import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PageHeader({
  title,
  subtitle,
  actions,
  backTo,
}) {
  const navigate = useNavigate();

  return (
    <div className="page-header" id={`page-header-${title?.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="page-header-left">
        {backTo && (
          <button
            className="page-header-back"
            onClick={() => navigate(backTo)}
            title="Kembali"
          >
            <ArrowLeft size={20} />
          </button>
        )}
        <div>
          <h1 className="page-header-title">{title}</h1>
          {subtitle && <p className="page-header-subtitle">{subtitle}</p>}
        </div>
      </div>
      {actions && <div className="page-header-actions">{actions}</div>}
    </div>
  );
}
