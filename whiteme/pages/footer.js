const footer = ({children}) => {
    return (
        <>
            {children}
            <div>
                <h2>footer.tsx 로 들어가는 부분</h2>
            </div>
            <div className="footer">
                회사 바닥에 들어간다.
            </div>
        </>
    );
}

export default footer;