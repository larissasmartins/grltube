import config from "../config.json";
import styled from "styled-components";

function HomePage() {
    const homeStyle = { backgroundColor: "purple" };

    return (
        <div style={homeStyle}>
            <Menu></Menu>
            <Header></Header>
            <Timeline playlists={config.playlists}></Timeline>
        </div>
    )

}

export default HomePage

function Menu() {
    return (
        <div>Menu</div>
    )
}

const StyledHeader = styled.div`
    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
    
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
function Header() {
    return (
        <StyledHeader>
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function Timeline(propriedades) {
    const playlistNames = Object.keys(propriedades.playlists); //pegar a propriedade com js

    return (
        <div>
            {playlistNames.map((playlistName) => {
                const videos = propriedades.playlists[playlistName];
                console.log(playlistName);
                console.log(videos);
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </div>
    )
}