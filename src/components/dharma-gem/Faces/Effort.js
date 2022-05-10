import { getPath } from "./scripts";
import Heading from "../Heading";
import React from "react";

export default function Effort() {
    const { path, pali, suttas } = getPath("effort"),
        effort = (
            <table id="right-effort-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>unarisen</th>
                        <th>arisen</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>unwholesome states of mind</td>
                        <td>prevent</td>
                        <td>abandon</td>
                    </tr>
                    <tr>
                        <td>wholesome states of mind</td>
                        <td>arouse</td>
                        <td>maintain</td>
                    </tr>
                </tbody>
            </table>
        );

    const splitter = (line, delim) =>
        line.split(delim).map((half, n) => (
            <React.Fragment key={half}>
                {half}
                {!n && (
                    <>
                        <br />
                        {delim}
                    </>
                )}
            </React.Fragment>
        ));

    return (
        <>
            <Heading {...{ pali, suttas }} />
            <ul>
                {path.parts.map((part, i) => (
                    <li key={part}>
                        {i === 0
                            ? splitter(part, "unwholesome")
                            : i === 1
                            ? splitter(part, "states")
                            : part}
                    </li>
                ))}
            </ul>
            {effort}
        </>
    );
}
