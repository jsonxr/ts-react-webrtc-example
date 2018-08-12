import * as React from 'react';

interface IProps {
    compiler: string,
    framework: string,
    bundler: string
}


export class Hello extends React.Component<IProps, {}> {
    private socket: WebSocket = null;

    render() {
        return <h1>This is a {this.props.framework} app using {this.props.compiler} with {this.props.bundler}</h1>
    }

    componentDidMount() {
        console.log('attempting a mount');
        const socket = new WebSocket(`wss://${window.location.hostname}:${window.location.port}/ws`);
        socket.onopen = () => {
            console.log('Socket onopen');
        }
        socket.onmessage = (event) => {
            console.log(event.data);
        }
        socket.onclose = (event) => {
            console.log('Socket onclose');
        }
    }
}