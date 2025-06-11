import * as React from 'react';
import classNames from 'classnames';
import SubmitButtonFormControl from '../FormBlock/SubmitButtonFormControl';
import { signUp, logIn } from '../../../utils/indexer/app';

export default function LoginFormBlock(props) {
    const { elementId = 'login-form', title = 'Login', submitButton } = props;
    const formRef = React.useRef(null);
    const [error, setError] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        setError('');
        setLoading(true);
        const data = new FormData(formRef.current);
        try {
            /*const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: data.get('email'),
                    password: data.get('password')
                })
            });*/
            await logIn(data.get('email'), data.get('password'));
           // if (!response.ok) throw new Error('Login failed');
            // Optional: redirect or show success
        } catch (err) {
            setError('Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <form
            id={elementId}
            ref={formRef}
            className={classNames('sb-component', 'sb-component-block', 'sb-component-form-block')}
            onSubmit={handleSubmit}
        >
            {title && <h2 className="mb-4">{title}</h2>}
            {error && <div className="text-red-500 mb-2">{error}</div>}
            <div className="mb-4">
                <label htmlFor="email" className="block mb-1">Email</label>
                <input name="email" type="email" required className="w-full border px-3 py-2" />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block mb-1">Password</label>
                <input name="password" type="password" required className="w-full border px-3 py-2" />
            </div>
            <div>
                <SubmitButtonFormControl
                    label={submitButton?.label || "Login"}
                    style={submitButton?.style || "primary"}
                    icon={submitButton?.icon}
                    showIcon={submitButton?.showIcon}
                    iconPosition={submitButton?.iconPosition}
                    disabled={loading}
                />
            </div>
        </form>
    );
}
