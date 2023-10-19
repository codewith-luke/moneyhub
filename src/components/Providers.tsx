import {Table, TableBody, TableCell, TableHead, TableRow} from "@aws-amplify/ui-react";

// This would of been the start of our Providers list if the user had many providers
// I was then going to make it so you can click on a table cell and it would take you to the provider page
// to then view the transactions for that provider (it could be a separate page, but to start was going to just
// swap out the table content for the transactions
export default function Providers() {
    return (<Table
            caption=""
            highlightOnHover={false}>
            <TableHead>
                <TableRow>
                    <TableCell as="th">Citrus</TableCell>
                    <TableCell as="th">Stone Fruit</TableCell>
                    <TableCell as="th">Berry</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Orange</TableCell>
                    <TableCell>Nectarine</TableCell>
                    <TableCell>Raspberry</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Grapefruit</TableCell>
                    <TableCell>Apricot</TableCell>
                    <TableCell>Blueberry</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Lime</TableCell>
                    <TableCell>Peach</TableCell>
                    <TableCell>Strawberry</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

