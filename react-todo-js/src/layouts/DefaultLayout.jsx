// 파일 이름 === 컴포넌트 이름이 동일(Single File Component)

/*
메인페이지에서 사용할 전체 기본 레이아웃이 되는 컴포넌트
 */
const DefaultLayout = ({ children }) => {

    return (
        <div className='w-full h-full overflow-y-scroll bg-slate-400'>
            <div className='max-w-xl mx-auto min-w-[20rem]'>
                { children }
            </div>
        </div>
    )
}

export default DefaultLayout; // 외부에서 import해서 쓸 수 있도록 내보내기(export)