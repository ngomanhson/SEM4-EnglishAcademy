import { useEffect, useRef, useState } from "react";
import Layout from "../../layouts";
import api from "../../../services/api";
import url from "../../../services/url";
import { useDebounce } from "../../../hooks";
import Loading from "../../layouts/Loading";

function Dictionary() {
    const [loading, setLoading] = useState(true);

    const [keyword, setKeyword] = useState("");
    const [definitions, setDefinitions] = useState([]);
    const [loadData, setLoadData] = useState(false);

    const inputRef = useRef();
    const debouncedValue = useDebounce(keyword, 800);

    useEffect(() => {
        const fetchData = async () => {
            if (!debouncedValue.trim()) {
                setDefinitions([]);
                return;
            }
            try {
                setLoadData(true);
                const dictionaryResponse = await api.get(url.DICTIONARY.SEARCH + "/" + debouncedValue);
                setDefinitions(dictionaryResponse.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoadData(false);
            }
        };

        fetchData();
    }, [debouncedValue]);

    const handleChange = (e) => {
        const { value } = e.target;
        setKeyword(value);
    };

    const handleClear = () => {
        setKeyword("");
        inputRef.current.focus();
    };

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <>
            {loading ? <Loading /> : ""}
            <Layout title="Dictionary">
                <div className="about-style-2 rbt-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 mx-auto">
                                <div className="content mx-auto">
                                    <h5 className="text-center">English Dictionary</h5>
                                    <div className="form-group__custom mb-3">
                                        <input type="text" ref={inputRef} placeholder="Search a word" value={keyword} onChange={handleChange} />
                                        <span className="view-password">
                                            {loadData && <i className="fas fa-spinner fa-pulse"></i>}
                                            {!!keyword && !loadData && <i className="fas fa-times-circle" onClick={handleClear}></i>}
                                        </span>
                                    </div>
                                    {definitions.map((entry, index) => (
                                        <div key={index}>
                                            {entry.meanings.map((meaning, meaningIndex) => (
                                                <div key={meaningIndex}>
                                                    <h4 className="mb-3">{entry.word}</h4>
                                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                                        <p className="m-0">
                                                            {meaning.partOfSpeech} {entry.phonetic ? entry.phonetic : "undefined"}
                                                        </p>

                                                        {entry.phonetics.length > 0 && (
                                                            <i
                                                                className="fas fa-volume-up"
                                                                onClick={() => {
                                                                    const audio = new Audio(entry.phonetics[0].audio);
                                                                    audio.play();
                                                                }}
                                                                style={{ cursor: "pointer" }}
                                                            ></i>
                                                        )}
                                                    </div>

                                                    <hr className="rbt-separator" />

                                                    {meaning.definitions.map((definition, definitionIndex) => (
                                                        <div className="mb-5" key={definitionIndex}>
                                                            <div className="definition-item">
                                                                <p className="text-dark fw-500 m-0">Meaning:</p>
                                                                <span>{definition.definition}</span>
                                                            </div>
                                                            {definition.example && (
                                                                <div className="mt-3 definition-item example">
                                                                    <p className="text-dark fw-500 m-0">Example:</p>
                                                                    <span>{definition.example}</span>
                                                                </div>
                                                            )}
                                                            <hr className="rbt-separator mt-5" />
                                                        </div>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Dictionary;
