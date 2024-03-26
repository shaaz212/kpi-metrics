import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import CardHeader from '@mui/material/CardHeader';
import TableContainer from '@mui/material/TableContainer';

import { fCurrency } from 'src/utils/format-number';

import Scrollbar from 'src/components/scrollbar';
import { TableHeadCustom } from 'src/components/table';

// ----------------------------------------------------------------------

export default function BooksTopTable({ title, subheader, tableData, tableLabels, ...other }) {
  return (
    <Card sx={{ height: 412 }} {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 3 }} />

      <TableContainer sx={{ overflow: 'unset' }}>
        <Scrollbar>
          <Table sx={{ minWidth: 640 }}>
            <TableHeadCustom headLabel={tableLabels} />

            <TableBody>
              {tableData?.map((row) => (
                <EcommerceBestSalesmanRow key={row.id} row={row} />
              ))}
            </TableBody>
          </Table>
        </Scrollbar>
      </TableContainer>
    </Card>
  );
}

BooksTopTable.propTypes = {
  subheader: PropTypes.string,
  tableData: PropTypes.array,
  tableLabels: PropTypes.array,
  title: PropTypes.string,
};

// ----------------------------------------------------------------------

function EcommerceBestSalesmanRow({ row }) {
  return (
    <TableRow>
      <TableCell sx={{ display: 'flex', alignItems: 'center' }}>{row?.name}</TableCell>

      <TableCell>{row?.product}</TableCell>

      <TableCell>{row?.invoiceId}</TableCell>

      <TableCell>{fCurrency(row.amount)}</TableCell>
    </TableRow>
  );
}

EcommerceBestSalesmanRow.propTypes = {
  row: PropTypes.object,
};
