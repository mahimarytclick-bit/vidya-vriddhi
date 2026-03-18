module.exports = [
"[project]/app/components/home/hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-ssr] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
"use client";
;
;
;
function Hero() {
    const texts = [
        "Find the Best Colleges",
        "Explore Top Courses",
        "Discover Competitive Exams"
    ];
    const [textIndex, setTextIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            setTextIndex((prev)=>(prev + 1) % texts.length);
        }, 3000);
        return ()=>clearInterval(interval);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full bg-cover bg-center text-white",
        style: {
            backgroundImage: "url('/hero.avif')"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/60"
            }, void 0, false, {
                fileName: "[project]/app/components/home/hero.tsx",
                lineNumber: 35,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-7xl mx-auto px-4 md:px-8 py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:grid lg:grid-cols-2 gap-10 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl sm:text-4xl md:text-5xl font-bold leading-tight",
                                    children: texts[textIndex]
                                }, void 0, false, {
                                    fileName: "[project]/app/components/home/hero.tsx",
                                    lineNumber: 46,
                                    columnNumber: 1
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-gray-200 text-sm md:text-base max-w-lg",
                                    children: "Explore thousands of colleges, courses and exams to build a successful career with Vidya Vriddhi."
                                }, void 0, false, {
                                    fileName: "[project]/app/components/home/hero.tsx",
                                    lineNumber: 52,
                                    columnNumber: 1
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 flex flex-col sm:flex-row bg-white rounded-xl overflow-hidden shadow-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Search Colleges, Courses or Exams...",
                                            className: "flex-1 px-4 py-3 text-black outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/home/hero.tsx",
                                            lineNumber: 63,
                                            columnNumber: 1
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "bg-orange-500 hover:bg-orange-600 px-6 py-3 flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/home/hero.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 1
                                                }, this),
                                                "Search"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/home/hero.tsx",
                                            lineNumber: 69,
                                            columnNumber: 1
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/home/hero.tsx",
                                    lineNumber: 61,
                                    columnNumber: 1
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-3 mt-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "bg-white/20 backdrop-blur px-4 py-2 rounded-lg text-sm",
                                            children: "Engineering"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/home/hero.tsx",
                                            lineNumber: 83,
                                            columnNumber: 1
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "bg-white/20 backdrop-blur px-4 py-2 rounded-lg text-sm",
                                            children: "MBA"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/home/hero.tsx",
                                            lineNumber: 87,
                                            columnNumber: 1
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "bg-white/20 backdrop-blur px-4 py-2 rounded-lg text-sm",
                                            children: "Medical"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/home/hero.tsx",
                                            lineNumber: 91,
                                            columnNumber: 1
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "bg-white/20 backdrop-blur px-4 py-2 rounded-lg text-sm",
                                            children: "Study Abroad"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/home/hero.tsx",
                                            lineNumber: 95,
                                            columnNumber: 1
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/home/hero.tsx",
                                    lineNumber: 81,
                                    columnNumber: 1
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-8 mt-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl md:text-2xl font-bold",
                                                    children: "5000+"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/home/hero.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 1
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-200 text-sm",
                                                    children: "Colleges"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/home/hero.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 1
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/home/hero.tsx",
                                            lineNumber: 106,
                                            columnNumber: 1
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl md:text-2xl font-bold",
                                                    children: "200+"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/home/hero.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 1
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-200 text-sm",
                                                    children: "Exams"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/home/hero.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 1
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/home/hero.tsx",
                                            lineNumber: 111,
                                            columnNumber: 1
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl md:text-2xl font-bold",
                                                    children: "1000+"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/home/hero.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 1
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-200 text-sm",
                                                    children: "Courses"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/home/hero.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 1
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/home/hero.tsx",
                                            lineNumber: 116,
                                            columnNumber: 1
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/home/hero.tsx",
                                    lineNumber: 104,
                                    columnNumber: 1
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/home/hero.tsx",
                            lineNumber: 44,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4 w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white text-black p-4 md:p-6 rounded-xl shadow-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                            className: "text-blue-600 mb-2"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/home/hero.tsx",
                                            lineNumber: 132,
                                            columnNumber: 1
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-sm md:text-base",
                                            children: "Explore Colleges"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/home/hero.tsx",
                                            lineNumber: 134,
                                            columnNumber: 1
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs md:text-sm text-gray-500",
                                            children: "Find top colleges across India"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/home/hero.tsx",
                                            lineNumber: 138,
                                            columnNumber: 1
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/home/hero.tsx",
                                    lineNumber: 130,
                                    columnNumber: 1
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white text-black p-4 md:p-6 rounded-xl shadow-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                            className: "text-orange-500 mb-2"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/home/hero.tsx",
                                            lineNumber: 147,
                                            columnNumber: 1
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-sm md:text-base",
                                            children: "Popular Courses"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/home/hero.tsx",
                                            lineNumber: 149,
                                            columnNumber: 1
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs md:text-sm text-gray-500",
                                            children: "Explore trending courses"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/home/hero.tsx",
                                            lineNumber: 153,
                                            columnNumber: 1
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/home/hero.tsx",
                                    lineNumber: 145,
                                    columnNumber: 1
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white text-black p-4 md:p-6 rounded-xl shadow-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            className: "text-blue-600 mb-2"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/home/hero.tsx",
                                            lineNumber: 162,
                                            columnNumber: 1
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-sm md:text-base",
                                            children: "Top Exams"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/home/hero.tsx",
                                            lineNumber: 164,
                                            columnNumber: 1
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs md:text-sm text-gray-500",
                                            children: "Check exam details"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/home/hero.tsx",
                                            lineNumber: 168,
                                            columnNumber: 1
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/home/hero.tsx",
                                    lineNumber: 160,
                                    columnNumber: 1
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white text-black p-4 md:p-6 rounded-xl shadow-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                            className: "text-orange-500 mb-2"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/home/hero.tsx",
                                            lineNumber: 177,
                                            columnNumber: 1
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-sm md:text-base",
                                            children: "Study Abroad"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/home/hero.tsx",
                                            lineNumber: 179,
                                            columnNumber: 1
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs md:text-sm text-gray-500",
                                            children: "Explore global universities"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/home/hero.tsx",
                                            lineNumber: 183,
                                            columnNumber: 1
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/home/hero.tsx",
                                    lineNumber: 175,
                                    columnNumber: 1
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/home/hero.tsx",
                            lineNumber: 128,
                            columnNumber: 1
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/home/hero.tsx",
                    lineNumber: 39,
                    columnNumber: 1
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/home/hero.tsx",
                lineNumber: 37,
                columnNumber: 1
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/home/hero.tsx",
        lineNumber: 28,
        columnNumber: 1
    }, this);
}
}),
"[project]/app/components/home/topColleges.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TopColleges
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const colleges = {
    Engineering: [
        {
            name: "IIT Delhi",
            city: "Delhi",
            rating: "4.8",
            fees: "₹2.2L / year",
            courses: "40+ Courses",
            image: "https://images.unsplash.com/photo-1590362891991-f776e747a588"
        },
        {
            name: "IIT Bombay",
            city: "Mumbai",
            rating: "4.9",
            fees: "₹2.3L / year",
            courses: "35+ Courses",
            image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
        },
        {
            name: "NIT Trichy",
            city: "Tamil Nadu",
            rating: "4.7",
            fees: "₹1.9L / year",
            courses: "30+ Courses",
            image: "https://images.unsplash.com/photo-1562774053-701939374585"
        },
        {
            name: "BITS Pilani",
            city: "Rajasthan",
            rating: "4.6",
            fees: "₹3.1L / year",
            courses: "25+ Courses",
            image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f"
        }
    ],
    MBA: [
        {
            name: "IIM Ahmedabad",
            city: "Ahmedabad",
            rating: "4.9",
            fees: "₹23L total",
            courses: "MBA Programs",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
        },
        {
            name: "IIM Bangalore",
            city: "Bangalore",
            rating: "4.8",
            fees: "₹24L total",
            courses: "MBA Programs",
            image: "https://images.unsplash.com/photo-1509062522246-3755977927d7"
        },
        {
            name: "IIM Calcutta",
            city: "Kolkata",
            rating: "4.8",
            fees: "₹23L total",
            courses: "MBA Programs",
            image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a"
        },
        {
            name: "FMS Delhi",
            city: "Delhi",
            rating: "4.7",
            fees: "₹2L total",
            courses: "MBA Programs",
            image: "https://upload.wikimedia.org/wikipedia/commons/2/20/FMS-_The_Red_Building_of_Dreams.JPG"
        }
    ]
};
function TopColleges() {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Engineering");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold text-black",
                                    children: "Top Colleges"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/home/topColleges.tsx",
                                    lineNumber: 119,
                                    columnNumber: 1
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 mt-1",
                                    children: "Explore the best colleges in India with rankings, fees and courses"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/home/topColleges.tsx",
                                    lineNumber: 123,
                                    columnNumber: 1
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/home/topColleges.tsx",
                            lineNumber: 117,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/colleges",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-orange-500 font-medium",
                                children: "View All →"
                            }, void 0, false, {
                                fileName: "[project]/app/components/home/topColleges.tsx",
                                lineNumber: 131,
                                columnNumber: 1
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/home/topColleges.tsx",
                            lineNumber: 129,
                            columnNumber: 1
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/home/topColleges.tsx",
                    lineNumber: 115,
                    columnNumber: 1
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4 mb-10",
                    children: Object.keys(colleges).map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActive(tab),
                            className: `px-5 py-2 rounded-lg font-medium transition

${active === tab ? "bg-orange-500 text-white" : "bg-white border text-black hover:bg-gray-100"}

`,
                            children: tab
                        }, tab, false, {
                            fileName: "[project]/app/components/home/topColleges.tsx",
                            lineNumber: 146,
                            columnNumber: 1
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/components/home/topColleges.tsx",
                    lineNumber: 142,
                    columnNumber: 1
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-4 gap-8",
                    children: colleges[active].map((college, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-44",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: college.image,
                                            alt: college.name,
                                            fill: true,
                                            className: "object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/home/topColleges.tsx",
                                            lineNumber: 183,
                                            columnNumber: 1
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-3 right-3 bg-white px-2 py-1 rounded flex items-center text-sm shadow",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                    size: 14,
                                                    className: "text-yellow-500 mr-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/home/topColleges.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 1
                                                }, this),
                                                college.rating
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/home/topColleges.tsx",
                                            lineNumber: 190,
                                            columnNumber: 1
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/home/topColleges.tsx",
                                    lineNumber: 181,
                                    columnNumber: 1
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-lg text-black",
                                            children: college.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/home/topColleges.tsx",
                                            lineNumber: 205,
                                            columnNumber: 1
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 flex items-center gap-1 text-sm mt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/home/topColleges.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 1
                                                }, this),
                                                college.city
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/home/topColleges.tsx",
                                            lineNumber: 209,
                                            columnNumber: 1
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-700 text-sm mt-2",
                                            children: college.courses
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/home/topColleges.tsx",
                                            lineNumber: 216,
                                            columnNumber: 1
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-800 font-medium mt-1",
                                            children: college.fees
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/home/topColleges.tsx",
                                            lineNumber: 220,
                                            columnNumber: 1
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/colleges",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "mt-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm",
                                                children: "View Details"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/home/topColleges.tsx",
                                                lineNumber: 226,
                                                columnNumber: 1
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/home/topColleges.tsx",
                                            lineNumber: 224,
                                            columnNumber: 1
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/home/topColleges.tsx",
                                    lineNumber: 203,
                                    columnNumber: 1
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/app/components/home/topColleges.tsx",
                            lineNumber: 174,
                            columnNumber: 1
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/components/home/topColleges.tsx",
                    lineNumber: 170,
                    columnNumber: 1
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/home/topColleges.tsx",
            lineNumber: 111,
            columnNumber: 1
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/home/topColleges.tsx",
        lineNumber: 109,
        columnNumber: 1
    }, this);
}
}),
"[project]/app/components/home/courses.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CoursesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
"use client";
;
;
;
const courses = [
    {
        title: "Engineering",
        students: "1.2M Students",
        image: "https://thumbs.dreamstime.com/b/manager-engineer-check-control-automation-robot-arms-machine-intelligent-factory-industrial-real-time-monitoring-system-124448906.jpg"
    },
    {
        title: "MBA",
        students: "850K Students",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df"
    },
    {
        title: "Medical",
        students: "600K Students",
        image: "https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-goggles_23-2149611193.jpg"
    },
    {
        title: "Law",
        students: "400K Students",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
    },
    {
        title: "Computer Science",
        students: "900K Students",
        image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f"
    },
    {
        title: "Commerce",
        students: "750K Students",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f"
    }
];
function CoursesSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold text-black",
                                    children: "Popular Courses"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/home/courses.tsx",
                                    lineNumber: 59,
                                    columnNumber: 1
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 mt-2",
                                    children: "Explore the most popular courses chosen by students"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/home/courses.tsx",
                                    lineNumber: 63,
                                    columnNumber: 1
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/home/courses.tsx",
                            lineNumber: 57,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "text-orange-500 flex items-center gap-1 font-medium",
                            children: [
                                "View All",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/app/components/home/courses.tsx",
                                    lineNumber: 73,
                                    columnNumber: 1
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/home/courses.tsx",
                            lineNumber: 69,
                            columnNumber: 1
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/home/courses.tsx",
                    lineNumber: 55,
                    columnNumber: 1
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-3 lg:grid-cols-3 gap-8",
                    children: courses.map((course, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group relative rounded-xl overflow-hidden shadow hover:shadow-xl transition",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-56",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: course.image,
                                            alt: course.title,
                                            fill: true,
                                            className: "object-cover group-hover:scale-105 transition duration-300"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/home/courses.tsx",
                                            lineNumber: 95,
                                            columnNumber: 1
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-black/40"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/home/courses.tsx",
                                            lineNumber: 104,
                                            columnNumber: 1
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/home/courses.tsx",
                                    lineNumber: 93,
                                    columnNumber: 1
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 p-6 text-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold",
                                            children: course.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/home/courses.tsx",
                                            lineNumber: 113,
                                            columnNumber: 1
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm opacity-90",
                                            children: course.students
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/home/courses.tsx",
                                            lineNumber: 117,
                                            columnNumber: 1
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "mt-3 bg-orange-500 px-4 py-2 rounded-md text-sm flex items-center gap-1",
                                            children: [
                                                "Explore Courses",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/home/courses.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 1
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/home/courses.tsx",
                                            lineNumber: 121,
                                            columnNumber: 1
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/home/courses.tsx",
                                    lineNumber: 111,
                                    columnNumber: 1
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/app/components/home/courses.tsx",
                            lineNumber: 86,
                            columnNumber: 1
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/components/home/courses.tsx",
                    lineNumber: 82,
                    columnNumber: 1
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/home/courses.tsx",
            lineNumber: 51,
            columnNumber: 1
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/home/courses.tsx",
        lineNumber: 49,
        columnNumber: 1
    }, this);
}
}),
"[project]/app/components/home/exam.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Exams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-ssr] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-ssr] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scale.js [app-ssr] (ecmascript) <export default as Scale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/landmark.js [app-ssr] (ecmascript) <export default as Landmark>");
"use client";
;
;
;
;
;
const exams = [
    {
        name: "JEE Main",
        students: "1.2M Applicants",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"]
    },
    {
        name: "NEET",
        students: "2M Applicants",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"]
    },
    {
        name: "CAT",
        students: "300K Applicants",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
    },
    {
        name: "GATE",
        students: "800K Applicants",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"]
    },
    {
        name: "CLAT",
        students: "90K Applicants",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"]
    },
    {
        name: "UPSC",
        students: "1M Applicants",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"]
    }
];
function Exams() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 bg-[#f5f7fb]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold text-black",
                                    children: "Popular Exams"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/home/exam.tsx",
                                    lineNumber: 62,
                                    columnNumber: 1
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 mt-2",
                                    children: "Explore top entrance exams for colleges in India"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/home/exam.tsx",
                                    lineNumber: 66,
                                    columnNumber: 1
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/home/exam.tsx",
                            lineNumber: 60,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "text-orange-500 font-medium",
                            children: "View All →"
                        }, void 0, false, {
                            fileName: "[project]/app/components/home/exam.tsx",
                            lineNumber: 72,
                            columnNumber: 1
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/home/exam.tsx",
                    lineNumber: 58,
                    columnNumber: 1
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Swiper"], {
                    spaceBetween: 20,
                    slidesPerView: 1,
                    breakpoints: {
                        640: {
                            slidesPerView: 2
                        },
                        768: {
                            slidesPerView: 3
                        },
                        1024: {
                            slidesPerView: 4
                        }
                    },
                    children: exams.map((exam, index)=>{
                        const Icon = exam.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl p-6 shadow hover:shadow-lg transition group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-14 h-14 flex items-center justify-center rounded-lg bg-blue-100 text-[#1e3a5f] mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            size: 28
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/home/exam.tsx",
                                            lineNumber: 105,
                                            columnNumber: 1
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/home/exam.tsx",
                                        lineNumber: 103,
                                        columnNumber: 1
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-black",
                                        children: exam.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/home/exam.tsx",
                                        lineNumber: 111,
                                        columnNumber: 1
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500 text-sm mt-1",
                                        children: exam.students
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/home/exam.tsx",
                                        lineNumber: 115,
                                        columnNumber: 1
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/colleges",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "mt-4 text-orange-500 text-sm font-medium group-hover:underline",
                                            children: "View Exam Details →"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/home/exam.tsx",
                                            lineNumber: 119,
                                            columnNumber: 1
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/home/exam.tsx",
                                        lineNumber: 118,
                                        columnNumber: 1
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/home/exam.tsx",
                                lineNumber: 99,
                                columnNumber: 1
                            }, this)
                        }, index, false, {
                            fileName: "[project]/app/components/home/exam.tsx",
                            lineNumber: 97,
                            columnNumber: 1
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/app/components/home/exam.tsx",
                    lineNumber: 81,
                    columnNumber: 1
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/home/exam.tsx",
            lineNumber: 54,
            columnNumber: 1
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/home/exam.tsx",
        lineNumber: 52,
        columnNumber: 1
    }, this);
}
}),
"[project]/app/components/home/findcollages.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FindColleges
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const cities = [
    {
        name: "Delhi",
        icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png"
    },
    {
        name: "Bangalore",
        icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png"
    },
    {
        name: "Mumbai",
        icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png"
    },
    {
        name: "Chennai",
        icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png"
    },
    {
        name: "Pune",
        icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png"
    },
    {
        name: "Kolkata",
        icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png"
    },
    {
        name: "Hyderabad",
        icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png"
    },
    {
        name: "Ahmedabad",
        icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png"
    },
    {
        name: "Coimbatore",
        icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png"
    },
    {
        name: "Dehradun",
        icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png"
    },
    {
        name: "Lucknow",
        icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png"
    },
    {
        name: "Explore",
        icon: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png"
    }
];
function FindColleges() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 bg-[#f5f7fb] relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 top-0 opacity-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/India_Map.svg/1200px-India_Map.svg.png",
                    width: 600,
                    height: 600,
                    alt: "map"
                }, void 0, false, {
                    fileName: "[project]/app/components/home/findcollages.tsx",
                    lineNumber: 31,
                    columnNumber: 1
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/home/findcollages.tsx",
                lineNumber: 29,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-bold text-black",
                                children: "Find Colleges Near You!"
                            }, void 0, false, {
                                fileName: "[project]/app/components/home/findcollages.tsx",
                                lineNumber: 48,
                                columnNumber: 1
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-blue-500 mt-3 text-lg font-semibold",
                                children: [
                                    "Search by city to",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-orange-500 font-semibold",
                                        children: "Explore Top Colleges"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/home/findcollages.tsx",
                                        lineNumber: 55,
                                        columnNumber: 3
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-500 font-semibold",
                                        children: "in your area."
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/home/findcollages.tsx",
                                        lineNumber: 57,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/home/findcollages.tsx",
                                lineNumber: 52,
                                columnNumber: 1
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/home/findcollages.tsx",
                        lineNumber: 46,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center mb-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white shadow-lg rounded-xl flex items-center w-full max-w-2xl overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-4 text-gray-500",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {}, void 0, false, {
                                        fileName: "[project]/app/components/home/findcollages.tsx",
                                        lineNumber: 74,
                                        columnNumber: 1
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/home/findcollages.tsx",
                                    lineNumber: 72,
                                    columnNumber: 1
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Search city or location...",
                                    className: "flex-1 px-2 py-4 outline-none text-black"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/home/findcollages.tsx",
                                    lineNumber: 78,
                                    columnNumber: 1
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-[#1e3a5f] text-white px-8 py-4 font-medium",
                                    children: "Search Now"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/home/findcollages.tsx",
                                    lineNumber: 84,
                                    columnNumber: 1
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/home/findcollages.tsx",
                            lineNumber: 70,
                            columnNumber: 1
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/home/findcollages.tsx",
                        lineNumber: 68,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6",
                        children: cities.map((city, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white border rounded-xl p-6 text-center hover:shadow-lg transition cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-center mb-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: city.icon,
                                            width: 40,
                                            height: 40,
                                            alt: city.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/home/findcollages.tsx",
                                            lineNumber: 108,
                                            columnNumber: 1
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/home/findcollages.tsx",
                                        lineNumber: 106,
                                        columnNumber: 1
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-medium text-black",
                                        children: city.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/home/findcollages.tsx",
                                        lineNumber: 117,
                                        columnNumber: 1
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/app/components/home/findcollages.tsx",
                                lineNumber: 101,
                                columnNumber: 1
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/home/findcollages.tsx",
                        lineNumber: 97,
                        columnNumber: 1
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/home/findcollages.tsx",
                lineNumber: 41,
                columnNumber: 1
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/home/findcollages.tsx",
        lineNumber: 25,
        columnNumber: 1
    }, this);
}
}),
"[project]/app/components/home/studyaboard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StudyAbroad
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const countries = [
    {
        name: "Georgia",
        flag: "https://flagcdn.com/w40/ge.png",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKVUS_xNkevpPiGimV_zKIqPvJD_fUWIzTyg&s",
        exams: "46+",
        scholarships: "46+",
        cost: "2160 USD/yr",
        courses: "46+",
        universities: "15+"
    },
    {
        name: "Kazakhstan",
        flag: "https://flagcdn.com/w40/kz.png",
        image: "data:image/jpeg;base64,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",
        exams: "41+",
        scholarships: "41+",
        cost: "3892 USD/yr",
        courses: "41+",
        universities: "10+"
    },
    {
        name: "Uzbekistan",
        flag: "https://flagcdn.com/w40/uz.png",
        image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5",
        exams: "41+",
        scholarships: "41+",
        cost: "3800 USD/yr",
        courses: "41+",
        universities: "9+"
    },
    {
        name: "Russia",
        flag: "https://flagcdn.com/w40/ru.png",
        image: "data:image/jpeg;base64,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",
        exams: "50+",
        scholarships: "30+",
        cost: "4200 USD/yr",
        courses: "60+",
        universities: "25+"
    },
    {
        name: "UK",
        flag: "https://flagcdn.com/w40/gb.png",
        image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
        exams: "70+",
        scholarships: "40+",
        cost: "9000 USD/yr",
        courses: "120+",
        universities: "35+"
    },
    {
        name: "Canada",
        flag: "https://flagcdn.com/w40/ca.png",
        image: "https://images.unsplash.com/photo-1505764706515-aa95265c5abc",
        exams: "60+",
        scholarships: "35+",
        cost: "11000 USD/yr",
        courses: "150+",
        universities: "40+"
    },
    {
        name: "Germany",
        flag: "https://flagcdn.com/w40/de.png",
        image: "https://images.unsplash.com/photo-1526779259212-939e64788e3c",
        exams: "55+",
        scholarships: "50+",
        cost: "5000 USD/yr",
        courses: "140+",
        universities: "30+"
    },
    {
        name: "Australia",
        flag: "https://flagcdn.com/w40/au.png",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXCPvM3PXngHT5UEzp6ykErsYLBeDmxFqfLA&s",
        exams: "40+",
        scholarships: "25+",
        cost: "13000 USD/yr",
        courses: "110+",
        universities: "22+"
    }
];
function StudyAbroad() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 bg-[#f5f7fb]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold text-[#1e3a5f]",
                            children: "Study Abroad"
                        }, void 0, false, {
                            fileName: "[project]/app/components/home/studyaboard.tsx",
                            lineNumber: 102,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "text-orange-500 font-medium",
                            children: "View All →"
                        }, void 0, false, {
                            fileName: "[project]/app/components/home/studyaboard.tsx",
                            lineNumber: 106,
                            columnNumber: 1
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/home/studyaboard.tsx",
                    lineNumber: 100,
                    columnNumber: 1
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Swiper"], {
                    spaceBetween: 25,
                    slidesPerView: 1,
                    loop: true,
                    autoplay: {
                        delay: 3000
                    },
                    breakpoints: {
                        640: {
                            slidesPerView: 2
                        },
                        768: {
                            slidesPerView: 3
                        },
                        1024: {
                            slidesPerView: 4
                        }
                    },
                    children: countries.map((country, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-36",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: country.image,
                                                alt: country.name,
                                                fill: true,
                                                className: "object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/home/studyaboard.tsx",
                                                lineNumber: 136,
                                                columnNumber: 1
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-3 left-3 flex items-center gap-2 bg-[#1e3a5f]/90 text-white px-3 py-1 rounded text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: country.flag,
                                                        width: 18,
                                                        height: 18,
                                                        alt: "flag"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/home/studyaboard.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 1
                                                    }, this),
                                                    country.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/home/studyaboard.tsx",
                                                lineNumber: 145,
                                                columnNumber: 1
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/home/studyaboard.tsx",
                                        lineNumber: 134,
                                        columnNumber: 1
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-2 text-xs mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border rounded-md p-2 text-gray-700",
                                                        children: [
                                                            "Exams",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/app/components/home/studyaboard.tsx",
                                                                lineNumber: 170,
                                                                columnNumber: 1
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-black",
                                                                children: country.exams
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/home/studyaboard.tsx",
                                                                lineNumber: 171,
                                                                columnNumber: 1
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/home/studyaboard.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 1
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border rounded-md p-2 text-gray-700",
                                                        children: [
                                                            "Scholarships",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/app/components/home/studyaboard.tsx",
                                                                lineNumber: 176,
                                                                columnNumber: 1
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-black",
                                                                children: country.scholarships
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/home/studyaboard.tsx",
                                                                lineNumber: 177,
                                                                columnNumber: 1
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/home/studyaboard.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 1
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border rounded-md p-2 text-gray-700",
                                                        children: [
                                                            "Avg Cost",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/app/components/home/studyaboard.tsx",
                                                                lineNumber: 182,
                                                                columnNumber: 1
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-black",
                                                                children: country.cost
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/home/studyaboard.tsx",
                                                                lineNumber: 183,
                                                                columnNumber: 1
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/home/studyaboard.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 1
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border rounded-md p-2 text-gray-700",
                                                        children: [
                                                            "Courses",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/app/components/home/studyaboard.tsx",
                                                                lineNumber: 188,
                                                                columnNumber: 1
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-black",
                                                                children: country.courses
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/home/studyaboard.tsx",
                                                                lineNumber: 189,
                                                                columnNumber: 1
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/home/studyaboard.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 1
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/home/studyaboard.tsx",
                                                lineNumber: 166,
                                                columnNumber: 1
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-600 mb-2",
                                                children: [
                                                    "Top Universities: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-black",
                                                        children: country.universities
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/home/studyaboard.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/home/studyaboard.tsx",
                                                lineNumber: 196,
                                                columnNumber: 1
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "hover:text-orange-500 cursor-pointer text-blue-500",
                                                        children: [
                                                            "Why Study in ",
                                                            country.name
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/home/studyaboard.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 1
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "hover:text-orange-500 cursor-pointer text-blue-500",
                                                        children: "SOP / LOR Guidance"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/home/studyaboard.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 1
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "hover:text-orange-500 cursor-pointer text-blue-500",
                                                        children: "Careers After Studying"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/home/studyaboard.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 1
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/home/studyaboard.tsx",
                                                lineNumber: 202,
                                                columnNumber: 1
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/home/studyaboard.tsx",
                                        lineNumber: 162,
                                        columnNumber: 1
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/home/studyaboard.tsx",
                                lineNumber: 130,
                                columnNumber: 1
                            }, this)
                        }, index, false, {
                            fileName: "[project]/app/components/home/studyaboard.tsx",
                            lineNumber: 128,
                            columnNumber: 1
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/components/home/studyaboard.tsx",
                    lineNumber: 114,
                    columnNumber: 1
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/home/studyaboard.tsx",
            lineNumber: 96,
            columnNumber: 1
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/home/studyaboard.tsx",
        lineNumber: 94,
        columnNumber: 1
    }, this);
}
}),
"[project]/app/components/home/blog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Blogs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const blogs = [
    {
        title: "How to Choose the Right College in India",
        category: "College Guide",
        date: "March 2026",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644"
    },
    {
        title: "Top Engineering Colleges in India",
        category: "Engineering",
        date: "March 2026",
        image: "https://images.unsplash.com/photo-1562774053-701939374585"
    },
    {
        title: "Best MBA Colleges for Management Studies",
        category: "MBA",
        date: "February 2026",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df"
    },
    {
        title: "How to Prepare for NEET Exam",
        category: "Medical",
        date: "February 2026",
        image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhIVFRUVFRcaFhYVFxUVFRcXGBcWFxYXFxUYHSggGBolHRUVITEiJSkrLi4uGB8zODMsNygtLisBCgoKDg0OGBAQGi0lICUtLS0rLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS8vLy0tLS0tLS0tLS0tLS0tLTAuKy0rK//AABEIAKoBKQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEHAP/EAEEQAAEDAgMFBgQEBQEHBQAAAAEAAhEDIQQSMQVBUWFxBhMigZGhMrHB8CNCUtEUYnKy4XMHJENjgpLxFTNTwsP/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAtEQACAgICAQIEBAcAAAAAAAAAAQIRAyESMUEEIhMyUWFxgaGxBUKR0eHw8f/aAAwDAQACEQMRAD8A01MIzCjxBDMRgaDGUHn1XceGN8OFOpTugsM0o9uim1RdO0Ud2pd2rQFc1qNicLB2sUwxEikuOYl5FFjoGAgqRK+e0ql0pkrJt8T6o+64CqqgM3XGlGhVPZdCg4Lj8So06knSUlFlJHSVLBFry6DOQhpjc43jqBeOYSztHiHUqPhMVKjxTpxuJ+J1+AB84TnY+z+4wjKcQ4SXb5cZJJO++9LLSsvjtzr6EsO4guYRBa5wjkCcp9ISivhq1StZzG02g6tLiTum4gJzthjoFemC4QC4NEuj9TRvIFiNSNLiCDs/adOqCWm++Pv23LimtnqY3oQdptn5qbW1GMfDg4ZHCmQRcGDOYcuS8k25hcQ6u8ua1pJ1ygu5XMj0Xs/aR/gLpgjfEwvK9uPrB8EkzpOsKS7OiUk4oW0m5acvIzAXIgCBqTC2nYHHGlTYCPDUlzt0GbHrEDyWDwmBqYp/c0zFMH8WoNP6G8T99fQcDhm0y2kwQ2mxrR7n9laEa2cmSSejdteDBBBBuCLgjiCiDovNOzG3H0cRXwbvExjy+kDqGPhxa08AXCOp4Lb4baLHb8p4H99FeyFB5K4XL5hVdV10QHznL4PVDyVKgdZWMXGoqn1V170DiHmTZYBzE1Jm8LNV60lG46odClwZdFCsJc3wi4MibbuRS3ENTOk7LdA4i5KwBbVaq6VOTA1RNZqqa1ExW4L6FNwXcvJExvGphgGzKXhMMA4buF1d9HmL5hnRpDmrnNhV0Crax0U/JelRFpVzShS8C5UaWPadJKbi2T5qL2xoCouKpa9RFYTEhLRV5EWPVeRdc5ca5ERtNkKtFCuYQmjaRInco1CG6hDmN8G9i6jsxzjLjA4bz+yjVcMwpssJj74priKsUi4cFlqe02U+8r1DDKduZcdw56pbciqhDGv3ZT27qtFbBsnQuJnyAn/tK2mDxLatPM3Qj05LyXGYmvtKtnp0sobGUzGUDSSdd5036LS7P2jicC1oxDGupk3c2zmkmJO4gmL2uROoKeeP2pJ7J4c9Tk2nTfdfkbLAVMrjSPMt6H4h5H2IWf7TbCBf31Fxo1tczfhd/WzR3Wx5pnWxLKrm927xfE0wbGJg8iLJmzLWZcdQdx3hczSfZ6EZV0eQbU264HucUzI7UOBLmOje0m/CQdFLBbE/j5OYigLPqCBmj8lPnxO7qm/+1DY1L+HAdqagDOIN3OdI/la4ecIHs32wbUw5o06Tab8PDcrbNLDYPDdRexF7kXMpFh3ZV5tUWPwdOiRTpMDGN0A+vEobZMvzPj4iSP6Zhp8wAfNdxpdFz4nkAn+ox9Vdhqr22a1uXgRu6ynkSizLba/D2lh3j/iNLHc9QP7m+i1YWT7akd7haotlqwQdWkFro5/Dqtexs3QYxdQxL2fC7y1HomFHaYPxiDxFx6aj3S2lTzFX90tbNSGZcDcGRxClSeBvSkEsdbzCMzWmU6diNUEVHiJlC4hy46Y5JdjXkbz6oi2C493i8kEailUJPNQFF1jE3v04rChDDZD1UTbRDVETAtUEjfA9AqmhE1MRDcm5x/b9lU0LGKgYIPAor+L/AJff/CHcF9CJja0nggEGQdCiKFUt0WQ2dtE04k+Gbg8+HAp1R2qHWILZGsz9F0JHlSdDyptBzWlwIOX4rSfT90WMTmF3EZxA3RYac/8APBZnAYgsqlodIBi8yeZJF55J/VrEZs0ZWtzA6mAPEY1nUeazRoybuwPHY8AtIcHGCMokOEmMxB0sBzsVYcQKQ8ch5HhGWByk237l3ZldjzGU3kw4hwBPitN/8ojaeAY8FxBzBpgza0kW0VLS0yHByTkmB0cU4mS4yfvTyR+HekeHKaYTcPqU80jnwt2OA+yvwNHO6+g1+gQZT3ZtHLTHE3Pnp7QuTI6R6/p4c576RaY0Qj6WdrmHUafRU4avFWpTPHMOhRDnQ8FQ6O9tMQ7VxGWiGHWfYXWF2k0VxQogkB+IAeeJd8MeQPqtv2lpeLyPusVSonwuAJyYmg6wk2fBt0eT5K2P6nFmvr8DSdmobSAbYBzhaxMEiSdZR/aTCiphawaJJpmOMgJPshhpPdTduqO9ytTTpyC39QIHmEt07LJcoOJn+yT81CjUBuabZ6i30WjfX7t2caG7hy0nySfYey3YajTpOcHRmEiY+N1r+Q8k57sPGXQ7j97kku3RXHfFX2Yz/aHiRVxmEpA+E0arhwzOLQJ/6Wv915PTxhw20MxsCQ14Gndus6Rys6OLeK2/b6pUo43DNy5Y/MdMuYyGn/rWJ2+wDGmL3AgRq4QBa29N/Ka9nq2E2f3tek06SXO4Q3W6qdYwNyJwdM4bC06bzNZ1INPFrOfMgNb0B4oRoU2MmYvt7/wj/wAz6FbKm6Pu6yHboZjRaP8A5B7yFqhcws1oZMY4c5WTvKJwVOUJUsAOCa4NsNnklHFOLPjceCnSJi2oH0lD4l143ucrcO78QjcfmNPaUYvYJK0cw2JeWnOA25GUXiDxQGLqAlNMaICz1R3iTkmFUaYsmApABA4U+OT+kR1kz9FZi8YRmb0jjdEAr2jihNtx1Q9HEAiSZnQqrEGSvmNWCWuqAqAdwXCF1oQARLl2eS+c1dy8giY5SKPw7xERfjw8kFUZleW8D16InD1CNDHGLLpTPMnEc4LEERpbkPdN8JiS+5HxSIdvncQfkkOC1AJsSJ6LX06LcogCBcaHdqOd0ZNC44tgL8OxhaGwDvAM36bot6o/G1QKTnE2y8J1tohWhrzJgEHUWJnjxRONo95TcwbxbrqPcBLe0MoUnRm8NUvHBP8AAUnC5EdVRsfAZGy8DNNpgwBvHX9kZiaGaIcWwZtvHBUlO3RDFhcVyf8AQMoszODeJ9t60gSTZFPxz+ke5t+6eLjyvZ7HpY1Fv6iTb1AtLazdW2PMKnEbQJpOqizGNc4m2Y5QScoNhpq703p3XAcCw7wvO9v7afg2tpNy/iCuQXQYDbQ1riA4kuFjqJsUI7Gye22EYLajsUw1AzKWnKWOqd4DYEEPiRroRFrQieztGG1XAEHxGDrLd3qEj2D2jpBzKFNjA19RwgMyQC2WuDpuS6GwRpEGy0lHHU6AzVajKbTUePEQMxzm3PnwTtEItNptkdq0PxS4b06wF2idQllB2WwdmB0dMgwYkHhafNMKT7a+6VlYd2fYps09QIe/3cT9UOyvEOU6jQ5rxP5j8glrH6M5fI/5QSDKVBPa3s83H4UtFqrfFSdwd+kngdPdeVdldn5sU6vXZIw18jt9a7KbCOAIe4/0L2PYeIsWnULM9qsK1lU922O8eXv51C1oPsAepdxTR8xBkelNCupUc9xc4y5xklXtwFVw8LD1t+6gynl671pME8CmbjTXgg1QsHZ5Zt7Bnv8ADtdq6s0kcg5p+QK1mHw7pmEs2jhM2OpCQe7puqOOgAu0X4eNq0dICAQ4RymPVGaqg45Xf4lVPBPcZMRPFGY6qGNEmN3EnkANVlNq9oq570YUNAw7yKpcJfDfzBpGXISC06kSCcsyiNm7fGLmnUYA+nIeWOD6bw60tM6HKeOouVOi6ZdTY99T9IYORJcb31AtFhOuq+FYtu4RBnMPh8/0+duaX4emwFwaGiDOjNfy/miQI9FZ/Dta1zmtBljhnEaAHmTqEtDF+3K7nlzWXAFhMAwJMlIW13A3NhuP0WkNAZak2ENvvmZgcuPkspjyAeE6Tr96qiEYVT2i42BgfNFMeY8vmkOGddOWPAABOunNMID1BdTphfVDdSYRpIvp5IBPiF0BShdAWMUspgTFryrMi4HCSBuiforpRAfbcpAVp3lo0kW0+ippFc2s4mu+dxt0gR7KFFyqmcc4jbAuJMZbzHGeBWgwmIIaWyeXLj0WcwD4IPrzT3DS+ABffu6kotk4RCqTDmkTpEbp1nrZNKFTM0EGeiGo0A06nmOP3KIpsDRDQAOAsPRK2VUKLCog3+/veuyoDVZAaHeyG+Bx/m+Q/wAlMmOkIbZ7IpN5ifUypU3QYXPLbZ341xikZHtJ2t8TqWDZ3tWkTne4hlGmQY8TnEA3tqBz3LH1dtVA5p2hh6dTNJbVDKTxc3jL+HUGgOUh1rkxCKwcvr1W04Lqe0K9R7CC4ua6WU3BrSHOyOD/AIbt7zMAYhQ25ser3OJIaXMdWbVZmdTJa1tP8V+o+LTTMQwSJKuklo5HKUrl/wAJ7Z23RaKTcJhKBe9oeypTpDNOd7Rl8IfnBabWgj82ixeJxL3uLqriXaeK0fygfl6Bajsjj6NGvhqlYgAYV4YSDAqOxFYNJI+EQX33L0mlh6QrF7QwPcAO9yeN+8w4iDJvroBAiCjy4eAKDyK7PK9gVMbSpvrUWOdQZd4ddm6SATMwZJbwut32e2j/ABFIVQ0tkkEEzcGDB3hH9p9ujDU876TqhnIcvwEEGQ8n4QRMWN9Jusv2FoNrU6dFz3CnkrPcxjixziKjGwXDxAAO0ETIW+aNtG48JKKdmq2ZtGi6o+kKjDUD3yyRNnub5mG6KnGUfxI6x1sfok9DsrgGV3M7x7nNDT3IcRkJzfnbBMZTYGRF9QrQ+oX1WZ3EUXDLJl+UtYS0v1dGZ19bC6yir0GU3VSHGAeM9iMw+Js36wh9oDPmdzJCXYmtWPdtoMaS42fFhvBgRl3yR5QkPafalZv4TXkNMyRAcRaxcOu6EVjbYksyUdjSg5lSpkDmlzbloIzDqExr4hlKnle5rc03e4NbaJueugXmFNpaQ5pII0IMEHkRoj8FiX1nd5WOdwJa0uiwGXQaTc3TyxCRzJIIbtGcbUeH0ocC0PeHZQGDMMmXQm2v6TcnU3YG1jXLxDWuF8zJyOExdjr7tbGOGiT4jGNzCrSMZYDoPd5hNwRF9RdHbFrsZjHuqOAD2ANl2aTLd46G/JTmrK4nSoo2vsPE0ar8TReB485GYNymoXCfEcrh8QM7jEEXSzA4x2GqPcyjVqZ4znI4NEAyGeEF0uJuQIEC+p0vbl0ij/rUf/2XoRqOtL2a2y5QAJPxSST4Y0i/qoM647PPNl1aT2RnLXfE8O8BBNzYjT6AJgWZmlrRDSCMztb65W+tzHQpXjZO2H5oJ7m5b8M+HRPHmxSsdC/HzAuY4TbckGMw5Ogn7stW6hnGXfu6/dlB2z6jRDGyDBJMEzYEeoTRBIxNCic2iYtdbojK2GObNAHQIevQuY0VCZSDKIY1VMpogEAgcZ9ue5BhOELoCkQugIGKMt1Z3am8b/X5qv8AiR+k+37pgB23sADFRo8Wh/mt4flHmEjpgkiOOnHktq9gIgpHisA5lXvGszMzAw253TbrKYi0W4PZtTgB5habZFABgdMlwHlySrA44OeWzkAgeKA/NO4FPqDXNERmvrYQN5trfgAg2aMSTt6kuKTULGoivh9/fqpEJZ2jxBp4as9rspDLHqQLc7wOoRTEcTZYGsIaJsWj5BX12b1nuzNT/c8Mf+Sz+0LR0n5govs647Rke0PYqhiCalM9xWMnOz4XE652DeeIg8ZSfB9iMSGk4vF1XtuO6p1apYRp43EixH5QB13Lf4p7WC+u5CV8eBTeSJhpMdBOqdSZKWOF2YvbPY1uJZ3lB7KTqTA3u3ANpFoLjYj4TLjcyDy1Wdbt7HYY91VJcP01fGHAOk5agMuBMiQTu3gRtqVV7a5A7y4Lge4L2y2RLBmgXMg3O6QEVicOKzgKtN7pLbOw8Nzy1ucybttvuATeE6nTp7RJ4rVxdMw7sNi9ouFR0MpA+EmQy5kho1qPMXjUjdJTp/Z+rQ7mpQjPRzf+5A7zMZIJBho3ZXRqLym+2sY+nSp1KZyOdXosMAGGOpglgkGBPBUYTtO8OAq5S0NJqQ2Hh+XMGNE3ty3HgVVOTXtWiElCLqTd/Ug3atJr3voYJzcY4Q5rmANpm8vLrWM3Ns1phLcBSltSn/ENdWqkl+XWXETDjAebGY4ovtJiRNMePuXSSxpLMwy0y0G0gS425nQq+vX7vDUqhoYVxd8NmksiItq43vpB1VFGkqXZzzyXKVv5ft/b9/0QRgsKyjTyh8kAl02I3zB+ADn6rNbSwgxLs1J7XPbMs+Emwu0mA7RQxWIqPaA97nADQm2p9fNCd1Fx/wCFaOFrd7OafqoypJaAm7OqFxYGOzDURBHWdEwb2er4cB2TO1xJOWAWkxa55DWNVsNjP/Dp1apm+UvduloguO4aieLgj7uGZjvC6qLxOZkBpidxIJB4X3qE8jujsxYU43Z51sfspXc/xMaGAy5lTwudJBHhvA8OvVXYnspVbVDy9k5iQwZiYzEwOQmJ06L0Snhh4hFmu8MSMstafCR8Op0VT8MJMDqdSepNyoObZ2RxJIzO2djtxDC2rLdC3KbtIzQZ0Pxm2nzSWvjMdRcKFKjhHUyDDu7cBG/PmqTPrK1+OICzZc59VxFmiBJ4624qbKJ0D7M2K2nUdWdBqv1DMzabZiQxpJMW3noBomdd25UPrhulzxP3ZVCsd4U2WQaNLcFHD4t/w5zGh0JH3KqZWUqDRJgATfr19FkxmTr4aDB8uBG4hVVsE0/Cddx1HKd6PBDmhpgFuhNhHA/RF4bCNAzA5jx3cLD6p0KzK4nClhuFANWjx1GZEapPhKBE5jJB4R7IiAZauU6ZkmSZi3DojsRSm6rwzXCQ4CROkx9xCxikNXcg4KVSzuUDyP3ClCYA9IUQFYQr6vw9VhWgbuA4g72kEGOH0X2Jxrw7KHWHC198/e5W0UsbSIcWu1H2CswJDPDY0/mv6I+nUBFkmwlMhozHMQLmInyR9GsAcoN4mN8aTHBANBZJVOJwrajSx4lrhBB4deKsD1XUrIgY52RgCyhRpgyGMaJ4wITOkMqE7O189H+lxHyd/wDZMnMUn2dEekwPaeGzgOGo3cQs7iqZyvbxa4DrBWmfXaDE+iHxDGP114oxdCTjYjo1MzxABIcIIABh0gtOa41BjmnIBZcta3mQPICDM2FrrO7cpvpVKLhMd6xpe3Voc4C/K41smfbCkBgqzpJcWtGYm8F7QQIsARuESqcba+5FSaUvsLsTtPDeClVJcPC4xma1rwwMgvaQHDloLzwUgMLhhnkGc+TeQ1+WW9LeQPVZbCnMXRTbDDD3S3eS1oIOpJGl/ZOeyrW9+xrhmE1g0EZos02B6FdXw0l5PO+O5SSpb6f03+pGpj6dWo2pWpHICcuuV0gCHQJjwg2J0NjuZEmoB3eHpU4mKjS1zADqWNgX66b4WrzsPg7sw2LFhy+UiPRIdnXZWDB/xXFosPzOIHBIsiktKq+408LhKnK7vpK9f79hQ/YYc3wuMgG58TSZkzAkG/P2lKauByGH25CHE9ItHM+62WzBUMmoALwIEHfMrObXp/jP/qXTinJycWzz/UY4xhHIl2EbL2rTFM0HjK1zS2SZsW5bm30+i0Lq+fLlaTcE3bAtxm27UAxNtywlVi9G2c38Gl/ps/tCh6mChTXk7/4dmllTi/BBlKASYlxm2gsBHPTVD4twY2UzNNDYnDU3fHeN0wPPeuOz1eOjGYypUqZjTY5+UGzRPQToJWc2JgcW0l1WRJMtIt5DX5L0TFYym1uWnAj8oAaEkxBcTIB8kWxVETYihUmzmsHHIc3kSY9l2iMogyeZumD3EDxGOv7IYGVJlkU1XtBAJAJ0X2GPiAGhmTuHXf6KPc3j5gH/AMKeGsVohYww+ANU6loBBJH9vNNzTyiBoAh9lVYY6bDNqd5Ii3oEY/S3BOKxfiGJbVpiU1rhLqqYRgNdhi2vseSHqVSGggSdOnMo54VLqfWeRMeiIADMDAOsSuZuQ9VfWtclQ75v6giY0JavqkTaY5q2oQqpQMRDoUMUAQXb2j21hfOKpxDvC7ofksAhSroik68xeNd8cJ4JPhibzGto4W15pnQsFjDFskIepUhdp4iNwKqdWsRAuigNGp7IH8Fx/wCaf7WJpiMYBbedALk9AkXZyp/u5DTfO6fRsJvs7DgA1DcmY+RKjLsvD5UB1sH+Z5DesF37D3XznMizHDmGO+aa0sOJzOud3L/KucVrM4mWxVFzgQ1+urXCx+oRewqzqlN1DE0xmbYh0Oa9h0PAiycupk6oV9O/hBnon5WqJfDp2LHdkaWcFtR7aepp2cJ/lc6S0a252hMq2w6Dmd2aTQBoRZwJ1ObWeuu9W0HmYKuxFWEXOdrYFhxU/atmUr9n2UnS+pLNwi9yAAY1uRpHkicHiGfC1rmATeDu4ti33Ku2pNSI3Eezmn6FV4TAODWyxoMGXB0l0/NdfPlD3vZ48sXDLWKNL83+oZUc4kMaBJ37rk3570t21gcl3+Np/MIa4cL6Ecjw3J4Gljg4iwHogtr1+9Hd02lxIudALg6+Snjm1JV15Oj1GFPHLk/d4X+AfZvZ+mIc/wAe8AiG8pG/5IvbW0+5aMpE7hZWY3Ed0xskDTNvtG7mstjmVKozhroc6G23W/wo5JuT5SZ6HpvTxxx4wjsZ1MXinMFRtreIE2PvZLmdoxBNRpkHVkT5DR3sh8XtyML3P55yu5Ab/NZTOcmebTZckstHesFo2uI2pScwVKQzzo6CBYwQQYMggoN+LeQYcR/Tb5LP7Ex5c51I6OGYcnCA71EHyPFOaarGfJWQlj4yoGe+eq+w9S4UqjLq/A4BznWFhcncFgHcTTtmMwIAI43PyQeDdnIAkTxB04kLTVsGDTyGY4jWUHSwrWHwjXfqUyRrDq1PO1rWkAAibbgNB7K+oVzCBTrt5IigFR3L5oauJ3I3IumgjYtCg0FCvTLWOdYwJ8047lQxGHLmOaIkgi+l+i1moxry6oSD+XlAE8OK+/hFqcLsQD4nZulv3V//AKQzn/3f4WsNIFLlW5645yqIOqYQspukqO0GjIVUF17ZBHFYAHgac3KPlDYKnEgi6JKJjsqDyuqFTksAI2XtA0nzq02cOXEcwt3gcWxzfA4OAAgj68F5m83R2xdp9y/MQS1wyuA1jWRzEJZRseEq0ekYd03VhCE2bimPptcxwLTv58DwKKD5Ui58Qo5VyvUgKVPRYxB1MdFTmBsqNr1iH0WzAc90j9RDHED2nyQmONSxpvDRzbPvNvdSnkrRbHjvZDaGziD3zKpblFw67XDhyR+ArtfTFQADML/W/VKMbRrvpBpuC9uYs1LJ8UAmztY1SXHY3F4c93hcM40o8PeOl3MwNNVSOdNVInL0nu5RNwypqogATAAGvBYCl2i2gNcK0cZJ/ZXbL7W4ivna2hScWGHguewiZj4onQ6cFvix8AXpp9y8DPHVO9qEuPgYQOrnGAJ4b+gRuzHHu31SfCGkN0AsTeOQHusVj+21KnNCKIcHZoaalVucHRz2yN0ESr2bfrYlr62QtaIYxgBymYzXA0j5hTy5U+jqw4mk7fZnu0tYhrgDDnvieXxO9gR5pZi8XlpMAuXHK35lx5QPcL7br39/+I0tyzqCAXON4HkB6oJ7iamh8LQG21LrkjrYeS5m7LpUPOzNJxrggEhrXAnqLT5wtk2gZgC6E7KU2UwyiQc75LnWgEAkDy06ytjQoNboL8d66sUGonBmmnLQswmxZg1Lchr5ncmgohohoAHJEMuuPCsRYI+kh3YZMCF9lWMD0KcLtakicqkWomFPdKcIuo0KjKsCinKokK+FU9YBxpVscwqVJYxnwwm+7iuEHRWuEWlcDU4hUGqxrV3IV80LGPiFxjCTA1XzlAlYxx5Q9V67VqIGtWRAy2qDGbchXVlFuKAPjkt4Dj6oJ75KIrYxwu2KtIzTeROo1aeoXovZraL61AVi3LJIsZHhtPITPovKm05XsXZzC93hqLIjwAnq7xH3ckmPiuyzOXOCYNVDqcGQuPxMa2+XqpHQIe3oqijTfRYXvp1Q6AQHQGuByzYm+lpErNbM7bYWq7K+q2m9pgtcQBPWYPkVtNuuLqMsN2kHyuD85WH2h2doVzmrUml2uYDKZ4yIPkpThbstjy8VRq8b2lo0Wtc54g8L7uSzmN7d0sxdnGXLYEPku4QG+/NWZWBgYWtAFgABlgWAjgku0tgNqZXUwxkzNiRYwSBv9VKUZFoTx+dCzafamvWtQoOgEEOccsEXBAGt1ncdiMY4u7yqQKkBzWQ0OA0BDddd/FbrAbBIkOq+EXAaIPqdOl0wp7Ew7dWl39TifbT2WWOQzzwML2c7Od48A9XGJDR+53BenUMO2m1tNhDWtGl+vmbyqGuDRDQAOAAA9AuPxTZuHHpCtCHE5smVzI4/B0n3cA482j90qxOGYDIaJ4wLdOCZVK06NjqUvxTiQmpE7ZRTrZHsf+lwJ5jf7LeheePFoW6wLppUz/I3+0J0JIKBXZVcqQKIpOFNrVAKQKwT5wUFNVuKxjhCqNrLr3KLGzdYx8Wqh7EWAq6jEQAZC+yqb2rmYrAEVc3XaeihX1UqWicQm7RU54VztCg3rGLa7wLAyhalZQqIZ6IGfVayArvRFRC1ERGUOB4FXUKatCnT1RMXU6a9hZa3BeR0tQvXApZC2LySKqe2VYFEqZYGNHh/hIsbsusCe7DHN3CS10cLiPdaZQKzVmWjHnZDn2rNLWDVsjM7lLT8Pmrq9EfCAAA0wBYC4TvGpadT0PzCyVGbsEwuH+Ldb6hC1aogloNo1PH5Hkmjfgf/AE/UJPV+IDdcxunigzHHvuoOeuVdVW/VAxMvQ9QqRVNRExCo2y2GyXzQpf6bfkFj9y0myD+BT/pCZCyG+ZSDgg2lSaURQ0OUsyFaVKVrCXlyErvUyUNVWMcbURFIIRiMpIgCWtUHtVgUXIBBajFTkRVRVIgP/9k="
    },
    {
        title: "Study Abroad Guide for Indian Students",
        category: "Study Abroad",
        date: "January 2026",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
    },
    {
        title: "Scholarships Available for Indian Students",
        category: "Scholarships",
        date: "January 2026",
        image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a"
    }
];
function Blogs() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold text-[#1e3a5f]",
                                    children: "Latest Blogs"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/home/blog.tsx",
                                    lineNumber: 59,
                                    columnNumber: 1
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 mt-2",
                                    children: "Explore insights, tips and guides for students"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/home/blog.tsx",
                                    lineNumber: 63,
                                    columnNumber: 1
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/home/blog.tsx",
                            lineNumber: 57,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "text-orange-500 font-medium",
                            children: "View All →"
                        }, void 0, false, {
                            fileName: "[project]/app/components/home/blog.tsx",
                            lineNumber: 69,
                            columnNumber: 1
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/home/blog.tsx",
                    lineNumber: 55,
                    columnNumber: 1
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Swiper"], {
                    spaceBetween: 25,
                    slidesPerView: 1,
                    breakpoints: {
                        640: {
                            slidesPerView: 2
                        },
                        768: {
                            slidesPerView: 3
                        },
                        1024: {
                            slidesPerView: 4
                        }
                    },
                    children: blogs.map((blog, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-44",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: blog.image,
                                                alt: blog.title,
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/home/blog.tsx",
                                                lineNumber: 98,
                                                columnNumber: 1
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded",
                                                children: blog.category
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/home/blog.tsx",
                                                lineNumber: 106,
                                                columnNumber: 1
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/home/blog.tsx",
                                        lineNumber: 96,
                                        columnNumber: 1
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-400 mb-2",
                                                children: blog.date
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/home/blog.tsx",
                                                lineNumber: 119,
                                                columnNumber: 1
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-black leading-snug",
                                                children: blog.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/home/blog.tsx",
                                                lineNumber: 123,
                                                columnNumber: 1
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "mt-4 text-orange-500 text-sm font-medium hover:underline",
                                                children: "Read More →"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/home/blog.tsx",
                                                lineNumber: 129,
                                                columnNumber: 1
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/home/blog.tsx",
                                        lineNumber: 117,
                                        columnNumber: 1
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/home/blog.tsx",
                                lineNumber: 92,
                                columnNumber: 1
                            }, this)
                        }, index, false, {
                            fileName: "[project]/app/components/home/blog.tsx",
                            lineNumber: 90,
                            columnNumber: 1
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/components/home/blog.tsx",
                    lineNumber: 78,
                    columnNumber: 1
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/home/blog.tsx",
            lineNumber: 51,
            columnNumber: 1
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/home/blog.tsx",
        lineNumber: 49,
        columnNumber: 1
    }, this);
}
}),
"[project]/app/components/home/contact.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
"use client";
;
;
function Contact() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 bg-[#f6f8fc]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-14",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl font-bold text-[#1e3a5f]",
                            children: "Contact Vidya Vridhi"
                        }, void 0, false, {
                            fileName: "[project]/app/components/home/contact.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mt-3",
                            children: "Get expert guidance for colleges, courses and career decisions."
                        }, void 0, false, {
                            fileName: "[project]/app/components/home/contact.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/home/contact.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-2 gap-12 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d",
                                alt: "contact",
                                className: "rounded-xl shadow-lg w-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/app/components/home/contact.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/home/contact.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-8 rounded-xl shadow-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    className: "space-y-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Full Name",
                                            className: "w-full border rounded-md px-4 py-3 focus:outline-none focus:border-[#1e3a5f] text-black"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/home/contact.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            placeholder: "Email Address",
                                            className: "w-full border rounded-md px-4 py-3 focus:outline-none focus:border-[#1e3a5f] text-black"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/home/contact.tsx",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Phone Number",
                                            className: "w-full border rounded-md px-4 py-3 focus:outline-none focus:border-[#1e3a5f] text-black"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/home/contact.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            placeholder: "Your Message",
                                            rows: 4,
                                            className: "w-full border rounded-md px-4 py-3 focus:outline-none focus:border-[#1e3a5f] text-black"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/home/contact.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-medium transition",
                                            children: "Send Message"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/home/contact.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/home/contact.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-4 mt-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border rounded-lg p-4 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                    className: "mx-auto text-[#1e3a5f]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/home/contact.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600 mt-2",
                                                    children: "info@vidyavridhi.com"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/home/contact.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/home/contact.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border rounded-lg p-4 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    className: "mx-auto text-[#1e3a5f]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/home/contact.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600 mt-2",
                                                    children: "+91 98765 43210"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/home/contact.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/home/contact.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border rounded-lg p-4 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    className: "mx-auto text-[#1e3a5f]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/home/contact.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600 mt-2",
                                                    children: "India"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/home/contact.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/home/contact.tsx",
                                            lineNumber: 110,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/home/contact.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/home/contact.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/home/contact.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/home/contact.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/home/contact.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/home/faq.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FAQ
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const faqs = [
    {
        question: "How can Vidya Vridhi help me choose the right college?",
        answer: "Vidya Vridhi provides detailed information about colleges, courses, exams and career options to help students make the best decisions."
    },
    {
        question: "Can I search colleges by location?",
        answer: "Yes, you can explore colleges by city, state and course preferences using our smart search tools."
    },
    {
        question: "Does Vidya Vridhi provide exam guidance?",
        answer: "Yes, we provide information and preparation tips for major entrance exams like JEE, NEET, CAT and more."
    },
    {
        question: "Can I explore study abroad options?",
        answer: "Absolutely. Vidya Vridhi offers guides and resources to explore universities and programs abroad."
    },
    {
        question: "Is Vidya Vridhi free to use?",
        answer: "Yes, students can explore colleges, courses and career guidance resources for free."
    }
];
function FAQ() {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const toggleFAQ = (index)=>{
        setActive(active === index ? null : index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 bg-[#f6f8fc]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-14",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold text-[#1e3a5f]",
                            children: "Frequently Asked Questions"
                        }, void 0, false, {
                            fileName: "[project]/app/components/home/faq.tsx",
                            lineNumber: 46,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mt-3",
                            children: "Everything you need to know about Vidya Vridhi"
                        }, void 0, false, {
                            fileName: "[project]/app/components/home/faq.tsx",
                            lineNumber: 50,
                            columnNumber: 1
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/home/faq.tsx",
                    lineNumber: 44,
                    columnNumber: 1
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 gap-12 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://images.unsplash.com/photo-1588072432836-e10032774350",
                                alt: "faq",
                                className: "rounded-xl shadow-lg w-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/app/components/home/faq.tsx",
                                lineNumber: 63,
                                columnNumber: 1
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/home/faq.tsx",
                            lineNumber: 61,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: faqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-lg shadow-sm border overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>toggleFAQ(index),
                                            className: "w-full flex justify-between items-center px-5 py-4 text-left font-medium text-[#1e3a5f]",
                                            children: [
                                                faq.question,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-orange-500 text-xl",
                                                    children: active === index ? "-" : "+"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/home/faq.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 1
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/home/faq.tsx",
                                            lineNumber: 83,
                                            columnNumber: 1
                                        }, this),
                                        active === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-5 pb-4 text-gray-600 text-sm",
                                            children: faq.answer
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/home/faq.tsx",
                                            lineNumber: 100,
                                            columnNumber: 1
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/app/components/home/faq.tsx",
                                    lineNumber: 78,
                                    columnNumber: 1
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/components/home/faq.tsx",
                            lineNumber: 74,
                            columnNumber: 1
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/home/faq.tsx",
                    lineNumber: 57,
                    columnNumber: 1
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/home/faq.tsx",
            lineNumber: 40,
            columnNumber: 1
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/home/faq.tsx",
        lineNumber: 38,
        columnNumber: 1
    }, this);
}
}),
];

//# sourceMappingURL=app_components_home_756221e4._.js.map