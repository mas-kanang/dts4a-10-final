import React, { useCallback, useRef } from "react";
import { useEffect, useState } from "react";
import { Box, Button, LinearProgress, TextField } from "@mui/material";
import { SearchRounded } from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import { useSearchParams } from "react-router-dom";
import Recipe from "../recipe/Recipe";

const Search = () => {
  const [search, setSearch] = useSearchParams();
  const keyword_ = useRef("");

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const handleData = useCallback(async () => {
    let keyword = search.get("keyword");

    let url =
      "https://masak-apa-tomorisakura.vercel.app/api/recipes-length/?limit=9";
    //kalo ada keyword
    if (keyword) {
      url = `https://masak-apa-tomorisakura.vercel.app/api/search/?q=${keyword}`;
    }

    setLoading(true);
    const response = await fetch(url);
    const results = await response.json();
    setData(results.results);
    setLoading(false);
  }, [search]);

  const handleChange = (event) => {
    event.preventDefault();
    setLoading(true);
    setSearch({
      keyword: keyword_.current.value,
    });
  };

  useEffect(() => {
    handleData();
  }, [handleData]);

  return (
    <>
      <Grid sx={{ mb: 5 }}>
        <form onSubmit={handleChange}>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <TextField
              inputRef={keyword_}
              id="outlined-basic"
              label="Apa yang ingin anda masak hari ini?"
              variant="outlined"
              fullWidth
            />
            <Button
              type="submit"
              color="success"
              sx={{ backgroundColor: "success" }}
            >
              <SearchRounded />
            </Button>
          </Box>
        </form>
      </Grid>

      {loading && <LinearProgress />}
      {!loading && data.length > 0 && (
        <div>
          <Grid container spacing={3}>
            {data.map((item, index) => {
              return (
                <Grid item xs key={index}>
                  <Recipe item={item} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      )}
      {!loading && data.length === 0 && <div>Data Tidak Ditemukan</div>}
    </>
  );
};

export default Search;
