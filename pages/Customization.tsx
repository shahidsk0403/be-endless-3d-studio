import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Upload, FileText, Send, Package, RefreshCw, Info, CheckCircle, PenTool, Clock, Shield } from 'lucide-react';
import { Product } from '../types';

import HeroSlider, { Slide } from '../components/HeroSlider';
import PageTitle from '../components/PageTitle';
import ScrollAnimation from '../components/ScrollAnimation';
import ConfirmationModal from '../components/modals/ConfirmationModal';

const Customization: React.FC = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState<'upload' | 'design' | 'prebuilt'>('upload');
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    // Form States
    const [technology, setTechnology] = useState('fdm');
    const [material, setMaterial] = useState('pla');
    const [dragActive, setDragActive] = useState(false);
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [uploadedImages, setUploadedImages] = useState<FileList | null>(null);

    // Validation States
    const [description, setDescription] = useState('');
    const [descError, setDescError] = useState('');
    const [customizationReqs, setCustomizationReqs] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [widthError, setWidthError] = useState('');
    const [heightError, setHeightError] = useState('');

    // Modal State
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', message: '' });

    const fileInputRef = useRef<HTMLInputElement>(null);
    const imgInputRef = useRef<HTMLInputElement>(null);

    const customizationSlides: Slide[] = [
        {
            id: 1,
            image: "media/banner/customisationpage-slider-first.jpg",
            title: "Fictional Worlds, Real Detail",
            subtitle: "Bring your most complex sci-fi and fantasy concepts, like this 'Moon City,' off the screen and into your hands.",
            cta: "GET STARTED",
            link: "/shop"
        },
        {
            id: 2,
            image: "media/banner/customisationpage-slider-second.jpg",
            title: "Architectural Precision",
            subtitle: "From blueprints to buildings, we bring architectural models to life with stunning, layer-by-layer detail.",
            cta: "GET STARTED",
            link: "/shop"
        },
        {
            id: 3,
            image: "media/banner/customisationpage-slider-three.jpg",
            title: "High-Detail Artistry",
            subtitle: "Our high-resolution SLA printers capture intricate details, perfect for figurines, art, and complex organic shapes.",
            cta: "GET STARTED",
            link: "/shop"
        }
    ];

    useEffect(() => {
        if (location.state?.activeTab) {
            setActiveTab(location.state.activeTab);
        }
        if (location.state?.product) {
            setSelectedProduct(location.state.product);
        }
    }, [location.state]);

    // Material Mapping
    const quoteMaterials: Record<string, string[]> = {
        fdm: ['PLA', 'ABS', 'PETG', 'PCF'],
        sla: ['Standard Resin', 'Tough Resin', 'Flexible Resin'],
        sls: ['Nylon PA12']
    };

    useEffect(() => {
        // Reset material when technology changes
        setMaterial(quoteMaterials[technology][0].toLowerCase().replace(/\s+/g, '-'));
    }, [technology]);

    // Drag & Drop Handlers
    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent, type: 'model' | 'image') => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            if (type === 'model') setUploadedFile(e.dataTransfer.files[0]);
            else setUploadedImages(e.dataTransfer.files);
        }
    };

    // Validation Handlers
    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const val = e.target.value;
        setDescription(val);
        const words = val.trim().split(/\s+/).length;
        if (val.trim().length > 0 && words < 10) {
            setDescError('Please enter at least 10 words');
        } else {
            setDescError('');
        }
    };

    const validateDimension = (val: string, setError: (msg: string) => void) => {
        const num = parseInt(val);
        if (num > 5000) {
            setError('Maximum allowed: 5000 mm');
        } else {
            setError('');
        }
    };

    const handleFormSubmit = (e: React.FormEvent, type: 'upload' | 'design' | 'prebuilt') => {
        e.preventDefault();

        let title = '';
        let message = '';

        switch (type) {
            case 'upload':
                if (!uploadedFile) {
                    alert("Please upload a 3D model file before submitting.");
                    return;
                }
                title = 'File Received!';
                message = 'Your 3D model has been successfully uploaded. Our team will analyze it for printability and send you a quote within 24 hours.';
                break;
            case 'design':
                if (!description.trim()) {
                    setDescError('Please describe your idea.');
                    return;
                }
                title = 'Design Request Sent!';
                message = 'Thank you for sharing your idea! Our designers will review your requirements and get back to you with a concept and estimate shortly.';
                break;
            case 'prebuilt':
                if (!customizationReqs.trim()) {
                    alert("Please describe your customization requirements.");
                    return;
                }
                title = 'Customization Requested!';
                message = 'We have received your customization request for this product. A specialist will review your requirements and contact you to finalize the details.';
                break;
        }

        setModalContent({ title, message });
        setShowModal(true);
    };

    return (
        <div className="pt-0 pb-20 bg-[#DCDCDC] min-h-screen">
            <PageTitle title="Customization" className="mb-0" />
            <HeroSlider slides={customizationSlides} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid md:grid-cols-3 gap-8 pt-5">
                    {/* Left Column: Main Content */}
                    <ScrollAnimation animation="fade-in-right" className="md:col-span-2">
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            {/* Tabs */}
                            <div className="flex border-b overflow-x-auto">
                                <button
                                    onClick={() => setActiveTab('upload')}
                                    className={`flex-1 py-4 px-4 text-center font-bold text-sm md:text-base transition-colors flex items-center justify-center gap-2 whitespace-nowrap ${activeTab === 'upload' ? 'bg-white text-teal-600 border-b-2 border-teal-600' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
                                >
                                    <Upload size={18} /> Upload Model
                                </button>
                                <button
                                    onClick={() => setActiveTab('design')}
                                    className={`flex-1 py-4 px-4 text-center font-bold text-sm md:text-base transition-colors flex items-center justify-center gap-2 whitespace-nowrap ${activeTab === 'design' ? 'bg-white text-teal-600 border-b-2 border-teal-600' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
                                >
                                    <PenTool size={18} /> Design Idea
                                </button>
                                <button
                                    onClick={() => setActiveTab('prebuilt')}
                                    className={`flex-1 py-4 px-4 text-center font-bold text-sm md:text-base transition-colors flex items-center justify-center gap-2 whitespace-nowrap ${activeTab === 'prebuilt' ? 'bg-white text-teal-600 border-b-2 border-teal-600' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
                                >
                                    <Package size={18} /> Prebuilt
                                </button>
                            </div>

                            <div className="p-6 md:p-8 h-[600px] overflow-y-auto custom-scrollbar">
                                {activeTab === 'upload' && (
                                    <form className="space-y-8" onSubmit={(e) => handleFormSubmit(e, 'upload')}>
                                        <div
                                            className={`border-2 border-dashed rounded-xl p-10 text-center transition-all cursor-pointer group ${dragActive ? 'border-teal-500 bg-teal-50' : 'border-gray-300 hover:border-teal-500 hover:bg-teal-50'}`}
                                            onDragEnter={handleDrag}
                                            onDragLeave={handleDrag}
                                            onDragOver={handleDrag}
                                            onDrop={(e) => handleDrop(e, 'model')}
                                            onClick={() => fileInputRef.current?.click()}
                                        >
                                            <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                                <Upload size={32} />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-700 mb-2">
                                                {uploadedFile ? uploadedFile.name : "Drop your .STL or .OBJ file here"}
                                            </h3>
                                            <p className="text-gray-500 text-sm">Max file size 50MB</p>
                                            <input
                                                ref={fileInputRef}
                                                type="file"
                                                className="hidden"
                                                accept=".stl,.obj"
                                                onChange={(e) => e.target.files && setUploadedFile(e.target.files[0])}
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div>
                                                <label className="block font-bold text-gray-700 mb-2">Technology</label>
                                                <select
                                                    value={technology}
                                                    onChange={(e) => setTechnology(e.target.value)}
                                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                                                >
                                                    <option value="fdm">FDM (Standard)</option>
                                                    <option value="sla">SLA (High Detail Resin)</option>
                                                    <option value="sls">SLS (Nylon)</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block font-bold text-gray-700 mb-2">Material</label>
                                                <select
                                                    value={material}
                                                    onChange={(e) => setMaterial(e.target.value)}
                                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                                                >
                                                    {quoteMaterials[technology].map(mat => (
                                                        <option key={mat} value={mat.toLowerCase().replace(/\s+/g, '-')}>{mat}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <button className="w-full bg-charcoal-800 text-white font-bold py-4 rounded-lg hover:bg-charcoal-700 transition-colors shadow-lg">
                                            Submit for Review
                                        </button>
                                    </form>
                                )}

                                {activeTab === 'design' && (
                                    <form className="space-y-8" onSubmit={(e) => handleFormSubmit(e, 'design')}>
                                        <div
                                            className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center hover:border-teal-500 hover:bg-teal-50 transition-all cursor-pointer group"
                                            onDragOver={handleDrag}
                                            onDrop={(e) => handleDrop(e, 'image')}
                                            onClick={() => imgInputRef.current?.click()}
                                        >
                                            <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                                <div className="text-3xl">🖼️</div>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-700 mb-2">
                                                {uploadedImages ? `${uploadedImages.length} file(s) selected` : "Upload reference images"}
                                            </h3>
                                            <p className="text-gray-500 text-sm">Supports JPG, PNG</p>
                                            <input
                                                ref={imgInputRef}
                                                type="file"
                                                multiple
                                                className="hidden"
                                                accept="image/*"
                                                onChange={(e) => setUploadedImages(e.target.files)}
                                            />
                                        </div>

                                        <div>
                                            <label className="block font-bold text-gray-700 mb-2">Description</label>
                                            <textarea
                                                rows={5}
                                                value={description}
                                                onChange={handleDescriptionChange}
                                                className={`w-full p-4 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none ${descError ? 'border-red-500' : 'border-gray-300'}`}
                                                placeholder="Describe your idea in detail..."
                                            ></textarea>
                                            {descError && <p className="text-red-500 text-sm mt-1">{descError}</p>}
                                            <p className="text-right text-xs text-gray-400 mt-1">{description.trim() ? description.trim().split(/\s+/).length : 0} words</p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-6">
                                            <div>
                                                <label className="block font-bold text-gray-700 mb-2">Width (mm)</label>
                                                <input
                                                    type="number"
                                                    value={width}
                                                    onChange={(e) => { setWidth(e.target.value); validateDimension(e.target.value, setWidthError); }}
                                                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none ${widthError ? 'border-red-500' : 'border-gray-300'}`}
                                                />
                                                {widthError && <p className="text-red-500 text-xs mt-1">{widthError}</p>}
                                            </div>
                                            <div>
                                                <label className="block font-bold text-gray-700 mb-2">Height (mm)</label>
                                                <input
                                                    type="number"
                                                    value={height}
                                                    onChange={(e) => { setHeight(e.target.value); validateDimension(e.target.value, setHeightError); }}
                                                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none ${heightError ? 'border-red-500' : 'border-gray-300'}`}
                                                />
                                                {heightError && <p className="text-red-500 text-xs mt-1">{heightError}</p>}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block font-bold text-gray-700 mb-2">Color</label>
                                            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none">
                                                <option>BLACK</option>
                                                <option>WHITE</option>
                                                <option>GREEN</option>
                                                <option>GREY</option>
                                                <option>WOODEN</option>
                                                <option>BROWN</option>
                                            </select>
                                        </div>

                                        <button className="w-full bg-teal-600 text-white font-bold py-4 rounded-lg hover:bg-teal-700 transition-colors shadow-lg flex items-center justify-center gap-2">
                                            <Send size={20} /> Request Design Quote
                                        </button>
                                    </form>
                                )}

                                {activeTab === 'prebuilt' && (
                                    <div className="space-y-8">
                                        {selectedProduct ? (
                                            <div className="flex flex-col md:flex-row gap-8 items-start bg-gray-50 p-6 rounded-xl border border-gray-200">
                                                <div className="w-full md:w-32 h-32 bg-white rounded-lg overflow-hidden border border-gray-200 shrink-0">
                                                    <img src={selectedProduct.images[0]} alt={selectedProduct.name} className="w-full h-full object-cover" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-charcoal-800 mb-1">{selectedProduct.name}</h3>
                                                    <p className="text-sm text-gray-500 mb-4">SKU: {selectedProduct.sku}</p>
                                                    <p className="text-gray-600 text-sm">You are requesting a customization for this specific product. Please detail your requirements below.</p>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="p-6 bg-blue-50 text-blue-800 rounded-xl border border-blue-200 text-center">
                                                <p className="text-lg font-medium mb-2">No Product Selected</p>
                                                <p>Please select a product from the shop to customise, or describe the product you have in mind below.</p>
                                            </div>
                                        )}

                                        <form className="space-y-8" onSubmit={(e) => handleFormSubmit(e, 'prebuilt')}>
                                            <div>
                                                <label className="block font-bold text-gray-700 mb-2">Customization Requirements</label>
                                                <textarea
                                                    rows={5}
                                                    value={customizationReqs}
                                                    onChange={(e) => setCustomizationReqs(e.target.value)}
                                                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                                                    placeholder="E.g., I want this in a specific Pantone color, or I need it scaled up by 20%, or I want to add an engraved text..."
                                                ></textarea>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block font-bold text-gray-700 mb-2">Quantity</label>
                                                    <input type="number" min="1" defaultValue="1" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none" />
                                                </div>
                                                <div>
                                                    <label className="block font-bold text-gray-700 mb-2">Target Date</label>
                                                    <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none" />
                                                </div>
                                            </div>

                                            <button className="w-full bg-teal-600 text-white font-bold py-4 rounded-lg hover:bg-teal-700 transition-colors shadow-lg flex items-center justify-center gap-2">
                                                <RefreshCw size={20} /> Request Customization
                                            </button>
                                        </form>
                                    </div>
                                )}
                            </div>
                        </div>

                    </ScrollAnimation>

                    {/* Right Column: Sidebar */}
                    <ScrollAnimation animation="fade-in-left" className="space-y-6">
                        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                            <h4 className="text-lg font-bold text-charcoal-800 mb-2">Quick Quote</h4>
                            <p className="text-sm text-gray-500 mb-4">Prefer a quick estimate? Tell us material & volume.</p>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-600 mb-1">Material</label>
                                    <select className="w-full p-2 border border-gray-200 rounded-lg text-sm">
                                        <option>PLA</option>
                                        <option>ABS</option>
                                        <option>PETG</option>
                                        <option>PCF</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-600 mb-1">Volume (cm³)</label>
                                    <input type="number" defaultValue="10" className="w-full p-2 border border-gray-200 rounded-lg text-sm" />
                                </div>
                                <button className="w-full bg-teal-500 text-white py-2 rounded-full font-bold text-sm hover:bg-teal-600 transition-colors">
                                    Get Estimate
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                            <h4 className="text-lg font-bold text-amber-700 mb-2">Contact Us</h4>
                            <div className="space-y-2 text-sm text-gray-600">
                                <ul className="space-y-2 list-disc">
                                    <li className="mb-2">Shop No.61, Jyotirmay Complex, Sector P-1, Cidco Town Centre, Seven Hills, Jalna Road Chh.Sambhajinagar (Aurangabad) Maharashtra-431003.</li>
                                    <li className="mb-2">endless3dprinting44@gmail.com</li>
                                    <li className="mb-2">+91 97679 73736</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="w-10 h-10 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-4">
                                <Shield size={20} />
                            </div>
                            <h4 className="font-bold text-charcoal-800 mb-2">Quality Materials</h4>
                            <p className="text-sm text-gray-500">Choose from PLA, ABS, PETG, SLA resins & Nylon SLS.</p>
                        </div>
                    </ScrollAnimation>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <ScrollAnimation animation="fade-in-up" delay={0}>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full">
                            <div className="w-10 h-10 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-4">
                                <Clock size={20} />
                            </div>
                            <h4 className="font-bold text-charcoal-800 mb-2">Fast Turnaround</h4>
                            <p className="text-sm text-gray-500">Small-batch runs and rapid prototyping available.</p>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animation="fade-in-up" delay={200}>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full">
                            <div className="w-10 h-10 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-4">
                                <CheckCircle size={20} />
                            </div>
                            <h4 className="font-bold text-charcoal-800 mb-2">Design Assistance</h4>
                            <p className="text-sm text-gray-500">Our team can refine your model for printability and finish.</p>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animation="fade-in-up" delay={400}>
                        <Link to="/customization-gallery" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group cursor-pointer block h-full">
                            <div className="w-10 h-10 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <div className="text-xl">✨</div>
                            </div>
                            <h4 className="font-bold text-charcoal-800 mb-2">Case Studies</h4>
                            <p className="text-sm text-gray-500">See Our Work: Custom Lamps for Top Hotels & more.</p>
                        </Link>
                    </ScrollAnimation>
                </div>
            </div>

            <ConfirmationModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                title={modalContent.title}
                message={modalContent.message}
            />
        </div>
    );
};

export default Customization;