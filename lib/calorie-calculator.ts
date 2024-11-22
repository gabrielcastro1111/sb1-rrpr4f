export type Gender = "male" | "female";
export type ActivityLevel = "sedentary" | "light" | "moderate" | "active" | "extra_active";

export function calculateBMR(
  weight: number,
  height: number,
  age: number,
  gender: Gender
): number {
  // Mifflin-St Jeor Equation
  const bmr =
    10 * weight + 6.25 * height - 5 * age + (gender === "male" ? 5 : -161);
  return bmr;
}

export function calculateTDEE(bmr: number, activityLevel: ActivityLevel): number {
  const activityMultipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    extra_active: 1.9,
  };

  return bmr * activityMultipliers[activityLevel];
}