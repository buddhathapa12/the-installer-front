import { ArrowBack, ArrowForward } from "@mui/icons-material";
import {
  Breadcrumbs,
  MenuItem,
  Select,
  Typography,
  Link as BreadcrumbsLink,
  Pagination,
  PaginationItem,
} from "@mui/material";
import { Box } from "@mui/system";
import { NextPage } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ShopItemList from "../../components/ShopItems";
import { IProduct, ProductsData } from "../../fixtures/BookOnline/productList";
import useStyles from "../../utils/shop";

enum SORTING_OPTIONS {
  DEFAULT = "default",
  NAME_A_TO_Z = "name_a_to_z",
  NAME_Z_TO_A = "name_z_to_a",
  PRICE_LOW_TO_HIGH = "price_low_to_high",
  PRICE_HIGH_TO_LOW = "price_high_to_low",
}

type SORTING_OPTION_TYPES =
  | SORTING_OPTIONS.DEFAULT
  | SORTING_OPTIONS.NAME_A_TO_Z
  | SORTING_OPTIONS.NAME_Z_TO_A
  | SORTING_OPTIONS.PRICE_HIGH_TO_LOW
  | SORTING_OPTIONS.PRICE_LOW_TO_HIGH;

export interface IProductList {
  products: IProduct[];
}
const Shop: NextPage<IProductList> = ({ products }) => {
  const styles = useStyles();
  const PageSize = 16;
  const totalPages = 2;

  const [sortBy, setSortBy] = useState<SORTING_OPTIONS>(SORTING_OPTIONS.DEFAULT);
  const [productData, setProductData] = useState<IProduct[]>(products.slice(0, 16));
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const start = Math.floor(page / totalPages) ? PageSize : 0;
    const end = page * PageSize > products.length ? products.length : page * PageSize;
    if (sortBy === SORTING_OPTIONS.DEFAULT) {
      const sortedData = products.sort((a, b) => (a.id < b.id ? -1 : 1));
      setProductData(sortedData.slice(start, end));
    } else if (sortBy === SORTING_OPTIONS.NAME_A_TO_Z) {
      const sortedData = products.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1));
      setProductData(sortedData.slice(start, end));
    } else if (sortBy === SORTING_OPTIONS.NAME_Z_TO_A) {
      const sortedData = products.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1));
      setProductData(sortedData.slice(start, end));
    } else if (sortBy === SORTING_OPTIONS.PRICE_LOW_TO_HIGH) {
      const sortedData = products.sort((a, b) => ((a.price || 0) < (b.price || 0) ? -1 : 1));
      setProductData(sortedData.slice(start, end));
    } else if (sortBy === SORTING_OPTIONS.PRICE_HIGH_TO_LOW) {
      const sortedData = products.sort((a, b) => ((a.price || 0) > (b.price || 0) ? -1 : 1));
      setProductData(sortedData.slice(start, end));
    }
  }, [page, sortBy, products]);

  useEffect(() => {
    const start = Math.floor(page / totalPages) ? PageSize : 0;
    const end = page * PageSize > products.length ? products.length : page * PageSize;
    setProductData(products.slice(start, end));
  }, [page]);

  return (
    <Box width={1} height={1} className={styles.container}>
      <Box className={styles.wrapper}>
        <Breadcrumbs className={styles.breadcrumbs}>
          <Link href={"/home"} passHref>
            <BreadcrumbsLink underline="none" color="inherit" href="/home">
              Home
            </BreadcrumbsLink>
          </Link>
          <BreadcrumbsLink underline="none" color="inherit">
            Shop
          </BreadcrumbsLink>
        </Breadcrumbs>
        <Typography component="h1" variant="h1" fontSize="2.5rem" fontWeight={500} lineHeight={1.2}>
          Shop
        </Typography>
        <Box className={styles.sortPageInfoWrapper}>
          <Typography>Showing 1-16 of 23 results</Typography>
          <Select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value as SORTING_OPTION_TYPES)}
            className={styles.sortingOption}
          >
            <MenuItem value={SORTING_OPTIONS.DEFAULT}>Default Sorting</MenuItem>
            <MenuItem value={SORTING_OPTIONS.NAME_A_TO_Z}>Sort by name: A to Z</MenuItem>
            <MenuItem value={SORTING_OPTIONS.NAME_Z_TO_A}>Sort by name: Z to A</MenuItem>
            <MenuItem value={SORTING_OPTIONS.PRICE_LOW_TO_HIGH}>Sort by price: low to high</MenuItem>
            <MenuItem value={SORTING_OPTIONS.PRICE_HIGH_TO_LOW}>Sort by price: high to low</MenuItem>
          </Select>
        </Box>
        <ShopItemList data={productData} />
        <Box className={styles.paginationWrapper}>
          <Pagination
            count={2}
            page={page}
            variant="outlined"
            shape="rounded"
            defaultPage={1}
            hidePrevButton={page < 2}
            onChange={(_, page) => {
              setPage(page);
            }}
            renderItem={(item) => (
              <PaginationItem
                components={{
                  previous: () => <ArrowBack fontSize="small" className={styles.paginationArrow} />,
                  next: () => <ArrowForward fontSize="small" className={styles.paginationArrow} />,
                }}
                {...item}
              />
            )}
          />
        </Box>
      </Box>
    </Box>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/product`);
  const products: IProduct[] = await res.json();
  return {
    props: { products }, // will be passed to the page component as props
  };
}

export default Shop;
