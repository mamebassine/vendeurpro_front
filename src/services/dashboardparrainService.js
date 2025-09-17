import api from "./api";

// Récupérer les infos dashboard parrain
export async function getParrainDashboard() {
  try {
    const response = await api.get("/parrain/dashboard");
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération du dashboard Parrain :", error);
    throw error;
  }
}
