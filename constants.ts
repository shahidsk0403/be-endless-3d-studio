import { Product, BlogPost } from './types';

export const PRODUCTS: Product[] = [
    {
        id: 1,
        name: "Moon City Lamp",
        sku: "BE-001",
        slug: "moon-city-lamp",
        category: "Lighting",
        price: 999,
        salePrice: 599,
        discount: 40,
        images: [
            "media/products/moon-city-white-bg-display.jpg",
            "media/products/moon-city-blue-bg-side-one.jpg",
            "media/products/moon-city-blue-bg-side-two.jpg",
            "media/products/moon-city-env-hover.jpg"
        ],
        availableColors: ["WHITE"],
        materials: ["PLA", "ABS", "PETG", "PCF"],
        sellingPoint: "A stunning, high-resolution 3D landscape of a fantastical city encased in a textured shell.",
        description: "This unique piece of art features an intricate, ancient-style metropolis set within a textured shell, evoking the mystery of an archaeological find. Crafted with high-detail PLA plastic, this lamp creates a warm, ambient glow, perfect as a conversation-starting desk piece.",
        specifications: { height: "149mm", width: "60mm" },
        stock: "In Stock",
        tags: ["Hot", "Sale"],
        rating: 0,
        reviewCount: 0
    },
    {
        id: 2,
        name: "Big Table Lamp",
        sku: "BE-002",
        slug: "big-table-lamp",
        category: "Lighting",
        price: 749,
        images: [
            "media/products/big-table-lamp-white-bg-display.jpg",
            "media/products/big-table-lamp-blue-bg-sid-one.jpg",
            "media/products/big-table-lamp-blue-bg-sid-two.jpg",
            "media/products/big-table-lamp-env-hover-one.jpg"
        ],
        availableColors: ["BLACK", "WHITE", "GREEN", "GREY", "WOODEN", "BROWN"],
        availableSize: "LARGE",
        materials: ["PLA", "ABS", "PETG", "PCF"],
        sellingPoint: "A large-scale, modern table lamp designed to be the centerpiece of any living space.",
        description: "Featuring a large, smooth cylindrical shade and a stable, minimalist base, this table lamp provides broad, even illumination. Its versatile design and wide range of color options make it suitable for contemporary or minimalist interiors. Printed for durability and scale.",
        specifications: { height: "210mm", width: "140mm" },
        stock: "In Stock",
        tags: [],
        rating: 0,
        reviewCount: 0
    },
    {
        id: 3,
        name: "Colosseum Pen Stand",
        sku: "BE-003",
        slug: "colosseum-pen-stand",
        category: "Office Utility",
        price: 999,
        images: [
            "media/products/colosseum-white-bg-display.jpg",
            "media/products/colosseum-white-bg-side-one.jpg",
            "media/products/colosseum-white-bg-side-two.jpg",
            "media/products/colosseum-env-hover.jpg"
        ],
        availableColors: ["BLACK", "WHITE", "GREEN", "GREY", "WOODEN", "BROWN"],
        materials: ["PLA", "ABS", "PETG", "PCF"],
        sellingPoint: "Organize your desk with a historical statement piece modeled after the Roman Colosseum.",
        description: "A detailed miniature replica of the Colosseum, serving as a functional and aesthetically pleasing pen and pencil holder. This model showcases the level of intricate geometric detail achievable with FDM printing, perfect for history enthusiasts and architects.",
        specifications: { height: "230mm", width: "90mm" },
        stock: "In Stock",
        tags: ["Hot"],
        rating: 0,
        reviewCount: 0
    },
    {
        id: 4,
        name: "Arc Pendant",
        sku: "BE-004",
        slug: "arc-pendant",
        category: "Home Decor",
        price: 599,
        images: [
            "media/products/arc-pendant-white-bg-black-colour-display.jpg",
            "media/products/arc-pendant-white-bg-black-colour-side-one.jpg",
            "media/products/arc-pendant-white-bg-black-colour-side-two.jpg",
            "media/products/arc-pendant-black-colour-env-hover.jpg"
        ],
        colorImages: {
            "BLACK": [
                "media/products/arc-pendant-white-bg-black-colour-display.jpg",
                "media/products/arc-pendant-white-bg-black-colour-side-one.jpg",
                "media/products/arc-pendant-white-bg-black-colour-side-two.jpg",
                "media/products/arc-pendant-black-colour-env-hover.jpg"
            ],
            "WHITE": [
                "media/products/arc-pendant-blue-bg-white-colour-display.jpg",
                "media/products/arc-pendant-blue-bg-white-colour-side-one.jpg",
                "media/products/arc-pendant-blue-bg-white-colour-side-two.jpg",
                "media/products/arc-pendant-white-colour-env-hover.jpg"
            ],
            "GREEN": [
                "media/products/arc-pendant-white-bg-green-colour-display.jpg",
                "media/products/arc-pendant-white-bg-green-colour-side-one.jpg",
                "media/products/arc-pendant-white-bg-green-colour-side-two.jpg",
                "media/products/arc-pendant-green-colour-env-hover.jpg"
            ],
            "GREY": [
                "media/products/arc-pendant-white-bg-grey-colour-display.jpg",
                "media/products/arc-pendant-white-bg-grey-colour-side-one.jpg",
                "media/products/arc-pendant-white-bg-grey-colour-side-two.jpg",
                "media/products/arc-pendant-grey-colour-env-hover.jpg"
            ],
            "BROWN": [
                "media/products/arc-pendant-white-bg-brown-colour-display.jpg",
                "media/products/arc-pendant-white-bg-brown-colour-side-one.jpg",
                "media/products/arc-pendant-white-bg-brown-colour-side-two.jpg",
                "media/products/arc-pendant-brown-colour-env-hover.jpg"
            ],
            "WOODEN": [
                "media/products/arc-pendant-white-bg-brown-colour-display.jpg",
                "media/products/arc-pendant-white-bg-brown-colour-side-one.jpg",
                "media/products/arc-pendant-white-bg-brown-colour-side-two.jpg",
                "media/products/arc-pendant-brown-colour-env-hover.jpg"
            ]
        },
        availableColors: ["BLACK", "WHITE", "GREEN", "GREY", "WOODEN", "BROWN"],
        materials: ["PLA", "ABS", "PETG", "PCF"],
        sellingPoint: "An elegant, curved modern pendant designed to hold and showcase small items or plants.",
        description: "Inspired by Indian architecture and contemporary design, the Arc Pendant features a graceful curve and minimal footprint. It's ideal for hanging small succulents or displaying lightweight collectibles. This piece demonstrates strength and smooth finish in a decorative context.",
        specifications: { height: "170mm", width: "95mm" },
        stock: "In Stock",
        tags: ["Hot"],
        rating: 0,
        reviewCount: 0
    },
    {
        id: 5,
        name: "Table Organiser",
        sku: "BE-005",
        slug: "table-organiser",
        category: "Office Utility",
        price: 449,
        images: [
            "media/products/table-organiser-white-bg-display.png",
            "media/products/table-organiser-white-bg-side-one.jpg",
            "media/products/table-organiser-white-bg-side-one.jpg",
            "media/products/table-organiser-env-hover.jpg"
        ],
        availableColors: ["BLACK", "WHITE", "GREEN", "GREY", "WOODEN", "BROWN"],
        materials: ["PLA", "ABS", "PETG", "PCF"],
        sellingPoint: "A modular and multi-compartment organizer for decluttering any modern workspace.",
        description: "Designed for peak desktop efficiency, this organiser features segmented slots for pens, sticky notes, phones, and small tools. Printed in durable PLA or ABS, it's built to withstand daily use while keeping essentials tidy and easily accessible.",
        specifications: { height: "140mm", width: "86mm" },
        stock: "In Stock",
        tags: [],
        rating: 0,
        reviewCount: 0
    },
    {
        id: 6,
        name: "Pendant Lighting",
        sku: "BE-006",
        slug: "pendant-lighting",
        category: "Lighting",
        price: 549,
        images: [
            "media/products/pendant-whtie-bg-display.jpg",
            "media/products/pendant-whtie-bg-side-one.jpg",
            "media/products/pendant-whtie-bg-side-two.jpg",
            "media/products/pendant-env-hover.jpg"
        ],
        availableColors: ["BLACK", "WHITE", "GREEN", "GREY", "WOODEN", "BROWN"],
        materials: ["PLA", "ABS", "PETG", "PCF"],
        sellingPoint: "A classic, minimalist tapered pendant shade optimized for standard bulb fixtures.",
        description: "This is a highly customizable, standard pendant lighting fixture, featuring a clean, tapered geometry. It is ideal for clustering over kitchen islands or dining tables, providing excellent downward light dispersion.",
        specifications: { height: "175mm", width: "245mm" },
        stock: "In Stock",
        tags: [],
        rating: 0,
        reviewCount: 0
    },
    {
        id: 7,
        name: "Bulb Pendant",
        sku: "BE-007",
        slug: "bulb-pendant",
        category: "Lighting",
        price: 450,
        salePrice: 350,
        discount: 22,
        images: [
            "media/products/bulb-pendant-white-bg-grey-colour-display.jpg",
            "media/products/bulb-pendant-white-bg-grey-colour-side-one.jpg",
            "media/products/bulb-pendant-white-bg-grey-colour-side-two.jpg",
            "media/products/bulb-pendant-colour-grey-env-hover.jpg"
        ],
        availableColors: ["BLACK", "WHITE", "GREEN", "GREY", "WOODEN", "BROWN"],
        materials: ["PLA", "ABS", "PETG", "PCF"],
        sellingPoint: "An innovative shade that mimics the shape of a classic exposed filament bulb.",
        description: "A unique shade design that plays with the form of the bulb itself. This light shade is printed with a translucent material to scatter light softly, creating a warm, cozy atmosphere. Requires professional installation for ceiling mount.",
        specifications: { height: "130mm", width: "135mm" },
        stock: "In Stock",
        tags: ["Sale"],
        rating: 0,
        reviewCount: 0
    },
    {
        id: 8,
        name: "Organic Pendant",
        sku: "BE-008",
        slug: "organic-pendant",
        category: "Lighting",
        price: 649,
        images: [
            "media/products/organic-pendant-white-bg-display.png",
            "media/products/organic-pendant-white-bg-side-one.png",
            "media/products/organic-pendant-blue-bg-side-two.jpg",
            "media/products/organic-pendant-env-hover.jpg"
        ],
        availableColors: ["BLACK", "WHITE", "GREEN", "GREY", "WOODEN", "BROWN"],
        materials: ["PLA", "ABS", "PETG", "PCF"],
        sellingPoint: "A flowing, naturally inspired light fixture demonstrating advanced free-form printing capability.",
        description: "Featuring smooth, irregular curves and an open structure, the Organic Pendant is inspired by natural forms found in nature. This light fixture is ideal for showing off complex, non-geometric designs and adds a sculptural element to any room.",
        specifications: { height: "150mm", width: "200mm" },
        stock: "In Stock",
        tags: [],
        rating: 0,
        reviewCount: 0
    },
    {
        id: 9,
        name: "Buddha Figurine",
        sku: "BE-009",
        slug: "buddha-figurine",
        category: "Home Decor",
        price: 500,
        salePrice: 399,
        discount: 20,
        images: [
            "media/products/buddha-white-bg-display.png",
            "media/products/buddha-white-bg-side-one.png",
            "media/products/buddha-blue-bg-side-two.jpg",
            "media/products/buddha-env-hover.jpg"
        ],
        availableColors: ["BLACK", "WHITE", "GREEN", "GREY", "WOODEN", "BROWN"],
        materials: ["PLA", "ABS", "PETG", "PCF"],
        sellingPoint: "A high-detail, meditative figurine perfect for home décor or a tranquil workspace.",
        description: "A beautifully rendered figurine of the Buddha, designed to capture the delicate folds of the robes and peaceful expression. This piece is ideal for showing off the precision and smooth surface capabilities of the 3D printing process, suitable for indoor display.",
        specifications: { height: "88mm", width: "92mm" },
        stock: "In Stock",
        tags: ["Hot", "Sale"],
        rating: 0,
        reviewCount: 0
    },
    {
        id: 10,
        name: "Half Moon Pendant",
        sku: "BE-010",
        slug: "half-moon-pendant",
        category: "Lighting",
        price: 499,
        salePrice: 449,
        discount: 10,
        images: [
            "media/products/half-moon-white-bg-display.png",
            "media/products/half-moon-blue-bg-side-one.jpg",
            "media/products/half-moon-blue-bg-side-two.jpg",
            "media/products/half-moon-env-hover.jpg"
        ],
        availableColors: ["WHITE"],
        materials: ["PLA", "ABS", "PETG", "PCF"],
        sellingPoint: "A minimalist semi-circular pendant that provides a subtle, focused downward light source.",
        description: "This simple Half Moon design provides ambient lighting with a clean, sharp edge. Its basic geometric form makes it perfect for blending into modern, light-filled rooms or acting as focused task lighting above a reading nook.",
        specifications: { height: "97mm", width: "205mm" },
        stock: "In Stock",
        tags: ["Sale"],
        rating: 0,
        reviewCount: 0
    },
    {
        id: 11,
        name: "Star Pendant",
        sku: "BE-011",
        slug: "star-pendant",
        category: "Lighting",
        price: 599,
        images: [
            "media/products/star-pendant-white-bg-black-colour-display.jpg",
            "media/products/star-pendant-white-bg-black-colour-side-one.jpg",
            "media/products/star-pendant-white-bg-black-colour-side-two.jpg",
            "media/products/star-pendant-white-bg-black-colour-env-hover.jpg"
        ],
        availableColors: ["BLACK", "WHITE", "GREEN", "GREY", "WOODEN", "BROWN"],
        materials: ["PLA", "ABS", "PETG", "PCF"],
        sellingPoint: "A striking, astronomical figure perfect for creating a dramatic ceiling light effect.",
        description: "Inspired by celestial and astronomical patterns, the Star Pendant features multiple pointed facets that cast unique shadows across the room. This model works best in open, high-ceilinged spaces and is a showcase for complex, multi-faceted printing.",
        specifications: { height: "120mm", width: "168mm" },
        stock: "In Stock",
        tags: ["Hot"],
        rating: 0,
        reviewCount: 0
    }
];

export const BLOG_POSTS: BlogPost[] = [
    {
        id: 4,
        title: "Innovations in 3D Printing Materials",
        category: "Technology",
        image: "media/banner/about-us-section-homepage-3D-prinitng-insights.jpg",
        excerpt: "Exploring the latest advancements in materials that are pushing the boundaries of 3D printing capabilities.",
        date: "Jan 15, 2024",
        author: "Sarah Jenkins",
        readTime: "5 min read",
        content: `
            <p>The world of 3D printing is evolving rapidly, and at the heart of this evolution is the development of new and innovative materials. Gone are the days when 3D printing was limited to simple plastics. Today, we are seeing a surge in advanced materials that are opening up new possibilities for manufacturing, design, and engineering.</p>
            
            <h3>Beyond Standard Plastics</h3>
            <p>While PLA and ABS remain staples in the industry, new filaments are offering enhanced properties. Carbon fiber-infused filaments, for example, provide exceptional strength-to-weight ratios, making them ideal for functional parts in automotive and aerospace applications. Similarly, flexible filaments like TPU allow for the creation of rubber-like parts that can withstand impact and abrasion.</p>

            <h3>Sustainable Options</h3>
            <p>Sustainability is a major driver in material innovation. We are seeing more biodegradable options entering the market, derived from renewable resources like corn starch and sugarcane. Recycled filaments, made from post-consumer waste, are also gaining popularity, allowing makers to reduce their environmental footprint without compromising on quality.</p>

            <h3>Metal and Ceramic Printing</h3>
            <p>Perhaps the most exciting frontier is the accessibility of metal and ceramic printing. Once the domain of high-end industrial machines, metal-infused filaments now allow desktop 3D printers to create parts that can be sintered into solid metal objects. This democratizes access to metal manufacturing, enabling small businesses and hobbyists to create durable, heat-resistant parts.</p>

            <h3>The Future of Materials</h3>
            <p>As research continues, we can expect to see even more specialized materials, such as conductive filaments for printing electronics, and biocompatible materials for medical implants. The future of 3D printing is not just about the printers themselves, but about the incredible materials they can shape.</p>
        `
    },
    {
        id: 5,
        title: "The Role of AI in Modern Manufacturing",
        category: "Innovation",
        image: "media/banner/about-us-section-homepage-technology.jpg",
        excerpt: "How artificial intelligence is revolutionizing production lines and optimizing 3D printing processes.",
        date: "Feb 20, 2024",
        author: "David Chen",
        readTime: "4 min read",
        content: `
            <p>Artificial Intelligence (AI) is no longer a futuristic concept; it is a present-day reality transforming the manufacturing landscape. In the realm of 3D printing, AI is playing a pivotal role in optimizing processes, reducing errors, and enabling designs that were previously impossible.</p>

            <h3>Optimizing Print Parameters</h3>
            <p>One of the biggest challenges in 3D printing is finding the perfect settings for a specific print. AI algorithms can analyze vast amounts of data to predict the optimal temperature, speed, and layer height for a given material and geometry. This "smart slicing" reduces trial and error, saving time and material.</p>

            <h3>Real-time Error Detection</h3>
            <p>Computer vision systems powered by AI can monitor prints in real-time, detecting anomalies such as layer shifts or spaghetti failures. These systems can automatically pause the print and alert the operator, or even attempt to correct the issue on the fly. This level of autonomy is crucial for large-scale additive manufacturing farms.</p>

            <h3>Generative Design</h3>
            <p>AI is also revolutionizing the design phase through generative design. Engineers can input constraints such as weight, load-bearing requirements, and material properties, and the AI will generate thousands of design iterations. These organic, optimized shapes are often impossible to manufacture with traditional methods but are perfect for 3D printing.</p>

            <h3>Predictive Maintenance</h3>
            <p>Beyond the printing process itself, AI is used for predictive maintenance of machines. By analyzing sensor data, AI can predict when a component is likely to fail, allowing for scheduled maintenance before a breakdown occurs, thus maximizing uptime and productivity.</p>
        `
    },
    {
        id: 6,
        title: "Real-World Uses of 3D Printing",
        category: "Applications",
        image: "media/banner/about-us-page-first.jpg",
        excerpt: "Explore how industries use 3D printing - from product design and architecture to healthcare, education, and creative arts.",
        date: "Mar 10, 2024",
        author: "Elena Rodriguez",
        readTime: "6 min read",
        content: `
            <p>3D printing has moved far beyond prototyping and is now a viable manufacturing method across a multitude of industries. Its ability to create complex geometries without tooling costs is changing how we build everything from houses to human organs.</p>

            <h3>Healthcare and Medicine</h3>
            <p>In healthcare, 3D printing is saving lives. Surgeons use patient-specific 3D printed models to plan complex surgeries, reducing operating time and risk. Custom prosthetics and orthotics are becoming more accessible and comfortable. Bioprinting research is even paving the way for printing functional human tissues and organs for transplantation.</p>

            <h3>Architecture and Construction</h3>
            <p>The construction industry is adopting large-scale 3D printing to build homes faster and more sustainably. Concrete 3D printers can extrude walls in a fraction of the time of traditional methods, with less waste. Architects are also using the technology to create intricate scale models and complex façade elements.</p>

            <h3>Education and Research</h3>
            <p>In schools and universities, 3D printers are powerful tools for STEAM education. Students can bring their ideas to physical reality, learning about engineering, design, and mathematics in a hands-on way. Researchers use 3D printing to create custom lab equipment and visualize complex scientific data.</p>

            <h3>Fashion and Art</h3>
            <p>Designers and artists are pushing the boundaries of aesthetics with 3D printing. From avant-garde fashion pieces to intricate sculptures, the technology allows for forms and textures that are impossible to achieve by hand. It enables a new level of customization and expression in the creative arts.</p>

            <p>As the technology matures and costs decrease, we will see 3D printing become even more integrated into our daily lives, empowering creators and industries to build a better future.</p>
        `
    }
];