import { Check, X } from "lucide-react";

const PasswordCriteria = ({ password }) => {
  const criteria = [
    { label: "At least 6 characters", met: password.length >= 6 },
    { label: "Contains uppercase letter", met: /[A-Z]/.test(password) },
    { label: "Contains lowercase letter", met: /[a-z]/.test(password) },
    { label: "Contains a number", met: /\d/.test(password) },
    { label: "Contains special character", met: /[^A-Za-z0-9]/.test(password) },
  ];

  return (
    <div className="mt-2 space-y-1">
      {criteria.map((item) => (
        <div key={item.label} className="flex items-center text-xs">
          {item.met ? (
            <Check className="size-4 text-fuchsia-500 mr-2" />
          ) : (
            <X className="size-4 text-gray-400 mr-2" />
          )}
          <span className={item.met ? "text-fuchsia-500" : "text-gray-500"}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

const PasswordStrengthMeter = ({ password }) => {
  const getStrength = (pass) => {
    let strength = 0;
    if (pass.length >= 6) strength++;
    if (pass.match(/[a-z]/) && pass.match(/[A-Z]/)) strength++;
    if (pass.match(/\d/)) strength++;
    if (pass.match(/[^a-zA-Z\d]/)) strength++;
    return strength;
  };
  const strength = getStrength(password);

  const getColor = (strength) => {
    if (strength === 0) return "bg-rose-300";
    if (strength === 1) return "bg-pink-300";
    if (strength === 2) return "bg-orange-300";
    if (strength === 3) return "bg-indigo-300";
    return "bg-fuchsia-400";
  };

  const getStrengthText = (strength) => {
    if (strength === 0) return "Very Weak";
    if (strength === 1) return "Weak";
    if (strength === 2) return "Fair";
    if (strength === 3) return "Good";
    return "Strong";
  };

  return (
    <div className="mt-2">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs text-gray-500">Password strength</span>
        <span className="text-xs text-gray-500">{getStrengthText(strength)}</span>
      </div>

      <div className="flex space-x-1">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`h-1 w-1/4 rounded-full transition-colors duration-300 
              ${index < strength ? getColor(strength) : "bg-gray-300"}
            `}
          />
        ))}
      </div>
      <PasswordCriteria password={password} />
    </div>
  );
};

export default PasswordStrengthMeter;
