import React from 'react'
import { Button } from "react-bootstrap";

export default function Controls() {
    const [filter, setFilter] = useState("seo");
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(works);
    }, []);
    useEffect(() => {
        setProjects([]);
        const filtered = works.map(p => ({ ...p, filtered: p.category.includes(filter) }));
        setProjects(filtered);
    }, [filter]);
    return (
        
        <div className="gallery-controls">
            <Button href="#" active={filter === "seo"} onClick={() => setFilter("seo")}>Posicionamiento SEO</Button>
            <Button href="#" active={filter === "dev"} onClick={() => setFilter("dev")}>Desarrollo web</Button>
        </div>
    )
}
