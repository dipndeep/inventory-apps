import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function Select({
  options = [],
  value,
  onChange,
  className = "",
  placeholder = "Pilih...",
  id,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const selectedOption = options.find((opt) => opt.value === value);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (val) => {
    if (onChange) {
      onChange(val);
    }
    setIsOpen(false);
  };

  return (
    <div
      ref={containerRef}
      className={`custom-select-container ${className}`}
      id={id ? `${id}-container` : undefined}
    >
      <button
        type="button"
        className={`custom-select-trigger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        id={id}
      >
        <span className="custom-select-value">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown size={16} className="custom-select-arrow" />
      </button>

      {isOpen && (
        <div className="custom-select-dropdown card">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              className={`custom-select-option ${
                opt.value === value ? "selected" : ""
              }`}
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
