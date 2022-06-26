import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import Home from "./Home";

describe('Home Page', () => {

    it('has the hello world header', () => {
        render(<Home />)

        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Hello World')
    })

    it('has a link to Github', () => {
        render(<Home />)

        const link = screen.getByRole('link', { name: 'Github Profile' })
        const icon = screen.getByRole('img', { name: 'Github Profile' })

        expect(link).toContainElement(icon)
    })

    it('has a link to Linkedin', () => {
        render(<Home />)

        const link = screen.getByRole('link', { name: 'Linkedin Profile' })
        const icon = screen.getByRole('img', { name: 'Linkedin Profile' })

        expect(link).toContainElement(icon)
    })

    it('has a link to Twitter', () => {
        render(<Home />)

        const link = screen.getByRole('link', { name: 'Twitter Profile' })
        const icon = screen.getByRole('img', { name: 'Twitter Profile' })

        expect(link).toContainElement(icon)
    })

})