
export const getAiMove = async (board:(string | null)[], aiModel:string) => {
  console.log(board, aiModel);
  console.log(aiModel)

const hardSystemPrompt = `
You are an expert Tic-Tac-Toe AI Playing as "O.

your Goal:
1.win if possible
2.Block the opponent if they are about to win
3.otherwise: choose center > corner > side

Respond ONLY with one position index (0–8) without any explanation.
`;

const hardUserPrompt = `
current Board : ${JSON.stringify(board)}

The board is represented lie this:
[0][1][2]
[3][4][5]
[6][7][8]

- "X" = human player
- "O" = you (AI)
- null = empty space

what sis your move?.
`;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_OPENROUTE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: aiModel,
        temperature: 0 , 
        messages: [
              { role: "system", content: hardSystemPrompt },
              { role: "user", content: hardUserPrompt },
            ]
      }),
    });

    const data = await response.json();
    console.log(data)
    const responseText = data.choices?.[0]?.message?.content?.trim();
    const match = responseText.match(/\d+/)
    return match && parseInt(match[0],10)
  } catch (err) {
    console.error(err);
    return null;
  }
};
