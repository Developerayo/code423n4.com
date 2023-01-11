import fetch from "node-fetch";

export const getApiContestData = async () => {
  try {
    const res = await fetch(`${process.env.C4_API_URL}/api/v0/getContest`, {
      method: "GET",
    });
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};
