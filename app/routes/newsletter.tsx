import { ActionFunction, Form, useActionData } from 'remix';

export let action: ActionFunction = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get('email');

  const API_KEY = 'CEOvcZXpO09BuJn7R6FO_g';
  const FORM_ID = '2990761';
  const API = 'https://api.convertkit.com/v3/';

  let res = await fetch(`${API}forms/${FORM_ID}/subscribe`, {
    method: 'POST',
    body: JSON.stringify({ email, api_key: API_KEY }),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
  return res.json();
};

export default function Newsletter() {
  let actionData = useActionData();

  return (
    <main>
      <h2>Subscribe!</h2>
      <p>Don't miss any of the action</p>
      <Form method="post">
        <fieldset>
          <input type="email" name="email" placeholder="you@example.com" />
          <button type="submit">Subscribe</button>
        </fieldset>
        <p>{actionData?.error ? actionData.message : <>&nbsp;</>}</p>
      </Form>
    </main>
  );
}
