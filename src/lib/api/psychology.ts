import { Term } from '../terms';

export async function fetchPsychologyTerms() {
  const response = await fetch('/api/psychology');
  const data = await response.json();
  return data.data as Term[];
}

export async function suggestNewTerm(term: Partial<Term>) {
  const response = await fetch('/api/psychology', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(term),
  });
  return response.json();
}

// 这里可以添加更多 API 相关函数
export async function generateCardDesign(prompt: string) {
  const response = await fetch('/api/psychology/design', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt }),
  });
  return response.json();
}
